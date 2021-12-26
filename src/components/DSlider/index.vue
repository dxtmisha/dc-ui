<template>
  <div :class="classList" class="d-slider">
    <input
      ref="input"
      v-bind="bindInput"
      :name="name"
      :value="propValue || ''"
      class="d-slider__hidden"
      type="text"
    />

    <label v-if="text" class="d-slider__label">
      {{ text }}<span v-if="required" class="d-slider__required"/>
      <span v-if="showLabel" class="d-slider__label__value">{{ textLabel }}</span>
    </label>

    <div class="d-slider__body">
      <d-icon
        v-if="icon"
        :active="active"
        :disabled="disabled"
        :icon="icon"
        :icon-active="iconActive"
        class="d-slider__icon is-icon"
      />
      <span v-if="textLeading" class="d-slider__text is-min" v-html="textLeading"/>

      <template v-if="multiple">
        <input
          ref="inputMin"
          v-if="showInput"
          v-bind="bindInput"
          :placeholder="textMin"
          class="d-slider__input is-min"
          data-type="min"
          @blur="onBlur"
          @focus="onFocus"
          @input="onInput"
        />
        <span v-else-if="showValue" class="d-slider__value is-min" v-html="textMin || '0'"/>
      </template>
      <d-slider-picker
        ref="slider"
        v-bind="bindSlider"
        :disabled="disabled"
        :value="value"
        class="d-slider__slider is-min"
        @on-input="onSelect"
        @on-change="onChange"
      />
      <input
        ref="inputMax"
        v-if="showInput"
        v-bind="bindInput"
        :placeholder="textMax || (multiple ? '100' : '0')"
        class="d-slider__input is-max"
        data-type="max"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
      <span v-else-if="showValue" class="d-slider__value is-max" v-html="textMax || (multiple ? '100' : '0')"/>
      <span v-if="textTrailing" class="d-slider__text is-max" v-html="textTrailing"/>
      <d-icon
        v-if="iconTrailing"
        :disabled="disabled"
        :icon="iconTrailing"
        class="d-slider__icon is-trailing"
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
import attrSlider from '@/components/DSliderPicker/attrSlider'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useField from '@/uses/useField'
import useInput from './useInput'

export default {
  name: 'DSlider',
  components: {
    DIcon,
    DSliderPicker
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const input = ref(undefined)
    const inputMin = ref(undefined)
    const slider = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      valueMin,
      valueMax,
      textMin,
      textMax,
      textLabel,
      checkValidity,
      setChange,
      onSelect,
      onChange
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const bindInput = useInput(props)
    const bindSlider = attrSlider({ props })

    const palette = useColor(props)
    const classList = computed(() => {
      return {
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
      bindInput,
      bindSlider,
      classList,
      checkValidity,
      setChange,
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
