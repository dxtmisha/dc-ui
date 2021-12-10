<template>
  <div :class="classList">
    <input
      ref="input"
      v-bind="bindInput"
      class="d-slider__hidden"
      :name="name"
      type="text"
      :value="propValue || ''"
    />
    <label v-if="text" class="d-slider__label">
      {{ text }}<span v-if="required" class="d-slider__required"/>
      <span v-if="showLabel" class="d-slider__label__value">{{ textLabel }}</span>
    </label>
    <div class="d-slider__body">
      <d-icon
        v-if="icon"
        class="d-slider__icon is-icon"
        :icon="icon"
        :icon-active="iconActive"
        :active="active"
        :disabled="disabled"
      />
      <span
        v-if="textLeading"
        class="d-slider__text is-min"
        v-html="textLeading"
      />

      <template v-if="multiple">
        <input
          v-if="showInput"
          ref="inputMin"
          v-bind="bindInput"
          :placeholder="textMin"
          class="d-slider__input is-min"
          data-type="min"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <span
          v-else-if="showValue"
          class="d-slider__value is-min"
          v-html="textMin || '0'"
        />
      </template>
      <d-slider-picker
        ref="slider"
        v-bind="bindSlider"
        class="d-slider__slider is-min"
        :value="value"
        :disabled="disabled"
        @on-input="onSelect"
        @on-change="onChange"
      />
      <input
        v-if="showInput"
        ref="inputMax"
        v-bind="bindInput"
        :placeholder="textMax || (multiple ? '100' : '0')"
        class="d-slider__input is-max"
        data-type="max"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span
        v-else-if="showValue"
        class="d-slider__value is-max"
        v-html="textMax || (multiple ? '100' : '0')"
      />
      <span
        v-if="textTrailing"
        class="d-slider__text is-max"
        v-html="textTrailing"
      />
      <d-icon
        v-if="iconTrailing"
        class="d-slider__icon is-trailing"
        :icon="iconTrailing"
        :disabled="disabled"
      />
    </div>
    <template v-if="!disabled">
      <div v-if="propValidationMessage" class="d-slider__validation">{{ propValidationMessage }}</div>
      <div v-else-if="helperMessage" class="d-slider__helper">{{ helperMessage }}</div>
    </template>
  </div>
</template>

<script>
import DIcon from '@/components/DIcon'
import DSliderPicker from '@/components/DSliderPicker'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useField from '@/uses/useField'
import useInput from './useInput'
import useSlider from './useSlider'

export default {
  name: 'DSlider',
  components: {
    DIcon,
    DSliderPicker
  },
  props,
  setup (props, context) {
    const input = ref(undefined)
    const inputMin = ref(undefined)
    const slider = ref(undefined)

    const palette = useColor(props)

    const {
      propValidationMessage,
      propValue,
      valueMin,
      valueMax,
      textMin,
      textMax,
      textLabel,
      checkValidity,
      onSelect,
      onChange
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const { bindSlider } = useSlider(props)
    const { bindInput } = useInput(props)

    const classList = computed(() => {
      return {
        'd-slider': true,
        'option-vertical': props.vertical,
        ...palette.value
      }
    })

    const onInput = ({ target }) => slider.value.set(parseFloat(target.value) || 0, target.dataset.type)
    const onFocus = ({ target }) => {
      switch (target.dataset.type) {
        case 'min':
          target.value = valueMin.value || ''
          break
        case 'max':
          target.value = valueMax.value || ''
          break
      }
    }
    const onBlur = ({ target }) => {
      target.value = ''
    }

    useAdmin('d-slider', context)

    return {
      input,
      inputMin,
      slider,
      propValidationMessage,
      propValue,
      textMin,
      textMax,
      textLabel,
      bindSlider,
      bindInput,
      classList,
      checkValidity,
      onSelect,
      onChange,
      onInput,
      onFocus,
      onBlur
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-slider {
  @include sliderInit;
}
</style>
