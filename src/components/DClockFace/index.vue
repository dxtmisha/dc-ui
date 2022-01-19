<template>
  <div :class="classList" class="d-clock-face">
    <div class="d-clock-face__list">
      <span
        v-for="(item, key) in list"
        :key="key"
        :class="{'status-select': item.value === propSelect, 'status-disabled': item.disabled}"
        :data-value="item.value"
        :style="item.style"
        class="d-clock-face__value"
        @click.prevent="onClick(item)"
      >
        <span :ref="(el) => {if (el) items[key] = el}" class="d-clock-face__name" v-text="item.name"/>
      </span>
    </div>

    <div class="d-clock-face__info">
      <span v-if="propSelect > -1" :style="styleSelect" class="d-clock-face__arrow cf-select"/>
      <template v-else>
        <span v-if="second > -1" :style="styleSecond" class="d-clock-face__arrow cf-second"/>
        <span v-if="minute > -1" :style="styleMinute" class="d-clock-face__arrow cf-minute"/>
        <span v-if="hour > -1" :style="styleHour" class="d-clock-face__arrow cf-hour"/>
      </template>
    </div>

    <div class="d-clock-face__point"/>
    <div class="d-clock-face__dial">
      <slot/>
    </div>

    <div
      v-if="propSelect > -1"
      @mousedown.prevent="onMousemove"
      @mouseup.prevent="onMouseup"
      @mousemove.prevent="onMousemove"
      @touchstart.prevent="onTouchmove"
      @touchend.prevent="onMouseup"
      @touchmove.prevent="onTouchmove"
      class="d-clock-face__censor"
    />
  </div>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useSelect from './useSelect'

export default {
  name: 'DClockFace',
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    let change

    const {
      items,
      propSelect,
      list,
      focus,
      styleSelect,
      styleHour,
      styleMinute,
      styleSecond,
      setSelect,
      emit
    } = useSelect(props, context)

    const classList = computed(() => {
      return {
        [`type-${props.type}`]: props.type,
        [`shape-${props.shape}`]: props.shape,
        'option-section': focus.value?.section,
        'option-select': propSelect.value > -1
      }
    })

    const onClick = item => {
      if (props.selected > -1) {
        propSelect.value = item.value
      }
    }
    const onMousemove = event => {
      if (event.button || event.buttons) {
        const item = setSelect(event.clientX, event.clientY)

        if (item) {
          change = true
          emit()
        }
      }
    }
    const onTouchmove = event => {
      const touch = event.changedTouches[0]

      event.button = true
      event.clientX = touch.clientX
      event.clientY = touch.clientY

      onMousemove(event)
    }
    const onMouseup = () => {
      if (change) {
        emit('on-change')
        change = false
      }
    }

    useAdmin('d-clock-face', context)

    return {
      propSelect,
      list,
      items,
      classList,
      styleSelect,
      styleHour,
      styleMinute,
      styleSecond,
      onClick,
      onMousemove,
      onTouchmove,
      onMouseup
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-clock-face {
  @include clockFaceInit;
}
</style>
