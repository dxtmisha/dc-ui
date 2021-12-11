<template>
  <div :class="classList">
    <div
      v-if="outputWeek"
      class="d-calendar__head"
    >
      <div
        v-for="item in listWeekday"
        :key="item.value"
        class="d-calendar__name cl-week"
        :data-value="item.value"
      >
        <div class="d-calendar__week">{{ item.text }}</div>
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
        class="d-calendar__name"
        :class="item.classList"
        :data-value="item.value"
        @mouseover="onMouseover($event, item)"
        @click="onClick($event, item)"
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
import useAdmin from '@/uses/useAdmin'
import useCalendar from './useCalendar'
import useDateTime from '@/uses/useDateTime'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DCalendar',
  props,
  emits: ['on-selected'],
  setup (props, context) {
    const { selected } = toRefs(props)

    const hover = useWatch(selected, data => {
      data.value = undefined
    })

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
        'd-calendar': true,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`shape-${props.shape}`]: props.shape,
        'option-multiple': props.multiple,
        'option-output-day': props.outputDay
      }
    })

    const onMouseout = () => {
      hover.value = undefined
    }
    const onMouseover = (event, item) => {
      if (
        props.multiple &&
        !item.output &&
        Array.isArray(props.selected) &&
        props.selected.length < 2
      ) {
        hover.value = [props.selected[0], item.value]
      }
    }
    const onClick = (event, item) => {
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
