<template>
  <div :class="classList" class="d-calendar">
    <div
      v-if="outputWeek"
      class="d-calendar__head"
    >
      <div
        v-for="{text, value} in listWeekday"
        :key="value"
        class="d-calendar__name cl-week"
        :data-value="value"
      >
        <div class="d-calendar__week">{{ text }}</div>
      </div>
    </div>
    <div
      v-if="outputMonth"
      class="d-calendar__list"
      v-on:mouseout.prevent="onMouseout"
    >
      <div
        v-for="item in list"
        :key="item.value"
        :class="item.classList"
        :data-value="item.value"
        class="d-calendar__name"
        @click="onClick(item)"
        @mouseover="onMouseover(item)"
      >
        <div class="d-calendar__day">{{ item.name }}</div>
        <slot :name="`day:${item.value}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { computed, toRefs } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useCalendar from './useCalendar'
import useDateTime from './../../uses/useDateTime'
import useWatch from './../../uses/useWatch'

export default {
  name: 'DCalendar',
  props,
  emits: ['on-selected', 'on-hover'],
  setup (props, context) {
    const { selected } = toRefs(props)

    let hoverUpdate = false
    const hover = useWatch(selected, data => {
      data.value = undefined
    }, [])

    const {
      today,
      objectFocus,
      objectMin,
      objectMax,
      listWeekday
    } = useDateTime(
      'date',
      props,
      context
    )

    const {
      list,
      updateSelect
    } = useCalendar(
      props,
      hover,
      today,
      objectFocus,
      objectMin,
      objectMax
    )

    const classList = computed(() => {
      return {
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`shape-${props.shape}`]: props.shape,
        'option-multiple': props.multiple,
        'option-output-day': props.outputDay
      }
    })

    const onMouseout = event => {
      if (hover.value !== undefined) {
        hoverUpdate = true

        setTimeout(() => {
          if (hoverUpdate) {
            hover.value = undefined
            context.emit('on-hover', { item: undefined })
          }
        }, event ? 100 : 0)
      }
    }
    const onMouseover = item => {
      hoverUpdate = false

      if (
        props.multiple &&
        !item.output &&
        Array.isArray(props.selected) &&
        props.selected.length < 2 && (
          hover.value === undefined ||
          hover.value[1] !== item.value
        )
      ) {
        hover.value = [props.selected[0], item.value]
        context.emit('on-hover', { item })
      }
    }
    const onClick = item => {
      if (!item.output) {
        context.emit('on-selected', {
          item,
          name: item.name,
          selected: updateSelect(item.value)
        })
      }
    }

    useAdmin('d-calendar', context)

    return {
      list,
      listWeekday,
      classList,
      onMouseout,
      onMouseover,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-calendar {
  @include calendarInit;
}
</style>
