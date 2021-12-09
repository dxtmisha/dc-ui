<template>
  <div :class="classList">
    <div class="d-clock-face__list">
      <span
        v-for="(item, key) in list"
        class="d-clock-face__value"
        :key="key"
        :class="{'status-select': item.value === propSelect, 'status-disabled': item.disabled}"
        :style="item.style"
        :data-value="item.value"
        @click.prevent="onClick(item)"
      >
        <span
          :ref="(el) => {if (el) items[key] = el}"
          class="d-clock-face__name"
        >{{ item.name }}</span>
      </span>
    </div>
    <div class="d-clock-face__info">
      <span
        v-if="propSelect > -1"
        class="d-clock-face__arrow cf-select"
        :style="styleSelect"
      />
      <template v-else>
        <span
          v-if="second > -1"
          class="d-clock-face__arrow cf-second"
          :style="styleSecond"
        />
        <span
          v-if="minute > -1"
          class="d-clock-face__arrow cf-minute"
          :style="styleMinute"
        />
        <span
          v-if="hour > -1"
          class="d-clock-face__arrow cf-hour"
          :style="styleHour"
        />
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
import useAdmin from '@/uses/useAdmin'
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
        'd-clock-face': true,
        [`type-${props.type}`]: props.type,
        [`shape-${props.shape}`]: props.shape,
        'option-section': focus.value?.section,
        'option-select': propSelect.value > -1
      }
    })

    const onClick = item => {
      if (props.select > -1) {
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
