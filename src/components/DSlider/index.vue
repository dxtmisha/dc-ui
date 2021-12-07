<template>
  <div ref="slider" :class="classList">
    <button
      v-if="multiple"
      ref="min"
      class="d-slider__thumb sl-min"
      @mousedown="onMousedown"
      @touchstart="onMousedown"
      @keydown="onKeydown"
    >
      <span ref="minLabel" class="d-slider__label"/>
      <d-ripple v-if="ripple && this.appearance !== 'drop' && !disabled"/>
    </button>
    <button
      ref="max"
      class="d-slider__thumb sl-max"
      @mousedown="onMousedown"
      @touchstart="onMousedown"
      @keydown="onKeydown"
    >
      <span ref="maxLabel" class="d-slider__label"/>
      <d-ripple v-if="ripple && this.appearance !== 'drop' && !disabled"/>
    </button>
    <div class="d-slider__rail"/>
    <div class="d-slider__track"/>
    <div v-if="propMarks" class="d-slider__marks">
      <span
        v-for="item in propMarks"
        :key="item.mark"
        class="d-slider__mark"
        :style="item.style"
        :data-text="item.text"
        :data-value="item.value"
      />
    </div>
    <div class="d-slider__select" @mousedown="onMousedown" @touchstart="onMousedown"/>
  </div>
</template>

<script>
import DRipple from '@/components/DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import EventControl from '@/classes/EventControl'
import useAdmin from '@/uses/useAdmin'
import useClass from '@/uses/useClass'
import useColor from '@/uses/useColor'
import useMarks from './useMarks'

export default {
  name: 'DSlider',
  components: { DRipple },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const slider = ref(undefined)
    const min = ref(undefined)
    const max = ref(undefined)
    const minLabel = ref(undefined)
    const maxLabel = ref(undefined)

    const palette = useColor(props)
    const classBody = useClass(document.body, 'd-slider__body')
    let old

    const {
      propMarks,
      getCoordinates,
      emit,
      init,
      initFocus,
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

    const classList = computed(() => {
      return {
        'd-slider': true,
        'status-disabled': props.disabled,
        [`appearance-${props.appearance}`]: props.appearance,
        'option-mark': propMarks.value,
        'option-vertical': props.vertical,
        ...palette.value
      }
    })

    const onMousemove = event => {
      const point = props.vertical ? event.clientY : event.clientX

      if (
        ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].indexOf(event.type) !== -1 ||
        (!event?.buttons && !('touches' in event) && !('targetTouches' in event))
      ) {
        event.$event.stop()
        emit('on-change')
        classBody.set(false)
      } else if (point !== old) {
        event.preventDefault()
        event.stopPropagation()
        init(getCoordinates(event))

        old = point
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

    useAdmin('d-slider', context)

    return {
      slider,
      min,
      max,
      minLabel,
      maxLabel,
      classList,
      propMarks,
      onMousedown,
      onKeydown
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
