<template>
  <div ref="slider" :class="classList" class="d-slider-picker">
    <button
      v-if="multiple"
      ref="min"
      class="d-slider-picker__thumb sl-min"
      type="button"
      @keydown="onKeydown"
      @mousedown.prevent.stop="onMousedown"
      @touchstart.prevent.stop="onMousedown"
    >
      <span ref="minLabel" class="d-slider-picker__label"/>
      <d-ripple v-if="isRipple"/>
    </button>
    <button
      ref="max"
      class="d-slider-picker__thumb sl-max"
      type="button"
      @keydown="onKeydown"
      @mousedown="onMousedown"
      @touchstart="onMousedown"
    >
      <span ref="maxLabel" class="d-slider-picker__label"/>
      <d-ripple v-if="isRipple"/>
    </button>
    <div class="d-slider-picker__rail"/>
    <div class="d-slider-picker__track"/>
    <div v-if="propMarks" class="d-slider-picker__marks">
      <span
        v-for="{mark, style, text, value} in propMarks"
        :key="mark"
        :data-text="text"
        :data-value="value"
        :style="style"
        class="d-slider-picker__mark"
      />
    </div>
    <div
      class="d-slider-picker__select"
      @mousedown="onMousedown"
      @touchstart="onMousedown"
    />
  </div>
</template>

<script>
import DRipple from '../DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import EventControl from '../../classes/EventControl'
import useAdmin from '../../uses/useAdmin'
import useClass from '../../uses/useClass'
import useColor from '../../uses/useColor'
import useMarks from './useMarks'

export default {
  name: 'DSliderPicker',
  components: { DRipple },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const slider = ref(undefined)
    const min = ref(undefined)
    const max = ref(undefined)
    const minLabel = ref(undefined)
    const maxLabel = ref(undefined)

    const isRipple = computed(() => props.ripple && props.appearance !== 'drop' && !props.disabled)

    const classBody = useClass(document.body, 'd-slider-picker__body')
    let old

    const {
      propMarks,
      getCoordinates,
      emit,
      init,
      initFocus,
      set,
      increase,
      decrease
    } = useMarks(
      slider,
      min,
      max,
      minLabel,
      maxLabel,
      props,
      context
    )

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'status-disabled': props.disabled,
        [`appearance-${props.appearance}`]: props.appearance,
        'option-mark': propMarks.value,
        'option-vertical': props.vertical,
        ...palette.value
      }
    })

    const onMousemove = event => {
      if (
        ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].indexOf(event.type) !== -1 ||
        (!event?.buttons && !('touches' in event) && !('targetTouches' in event))
      ) {
        event.$event.stop()
        emit('on-change')
        classBody.set(false)
      } else {
        event.stopPropagation()

        const point = props.vertical
          ? (event?.targetTouches?.[0].clientY || event?.clientY)
          : (event?.targetTouches?.[0].clientX || event?.clientX)

        if (point !== old) {
          init(getCoordinates(event))

          old = point
        }
      }
    }
    const onMousedown = event => {
      if (!props.disabled) {
        const x = getCoordinates(event)
        classBody.set(true)

        event.preventDefault()
        event.stopPropagation()

        initFocus(x)
        init(x)

        requestAnimationFrame(() => EventControl.init(document.body, onMousemove, [
          'mousemove',
          'mouseup',
          'contextmenu',
          'touchmove',
          'touchend',
          'touchcancel'
        ])
          .setDomElement(slider.value)
          .go())
      }
    }
    const onKeydown = event => {
      const key = event.code || event.key || event.keyCode

      switch (key) {
        case 'ArrowRight':
        case 39:
          increase()
          break
        case 'ArrowLeft':
        case 37:
          decrease()
          break
      }
    }

    useAdmin('d-slider-picker', context)

    return {
      slider,
      min,
      max,
      minLabel,
      maxLabel,
      isRipple,
      classList,
      propMarks,
      set,
      onMousedown,
      onKeydown
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-slider-picker {
  @include sliderPickerInit;
}
</style>
