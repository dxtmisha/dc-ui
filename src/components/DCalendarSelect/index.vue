<template>
  <div :class="classList" class="d-calendar-select">
    <div class="d-calendar-select__menu">
      <d-button
        v-bind="bindButton"
        :icon-trailing="iconArrowDown"
        :text="activeLocale"
        :turn="!!motionYears"
        @click="onActive"
      />
      <div class="d-calendar-select__space"/>
      <template v-if="!motionYears">
        <d-button v-bind="bindButton" :icon="iconChevronLeft" @click="toPrevious"/>
        <d-button v-bind="bindButton" :icon="iconChevronRight" @click="toNext"/>
      </template>
    </div>

    <div v-if="active" class="d-calendar-select__calendar">
      <d-motion-axis ref="motion">
        <template v-if="motionYears" v-slot:years>
          <d-scrollbar ref="years" :border="true" class="d-calendar-select__list cs-years">
            <div
              v-for="{class: className, year} in listYears"
              :key="year"
              class="d-calendar-select__item"
            >
              <button
                :class="className"
                :data-value="year"
                @click="onSelectedYear(year)"
                v-text="year"
              />
            </div>
          </d-scrollbar>
        </template>

        <template v-if="motionYears" v-slot:months>
          <d-scrollbar :border="true" class="d-calendar-select__list cs-month">
            <div
              v-for="{class: className, text, value} in listMonths"
              :key="value"
              class="d-calendar-select__item"
            >
              <button
                :class="className"
                :data-value="value"
                @click="onSelectedMonth(value)"
                v-text="text"
              />
            </div>
          </d-scrollbar>
        </template>
        <template v-for="{slot, value} in list" :key="value" v-slot:[slot]>
          <d-calendar
            v-bind="bindCalendar"
            :value="value"
            @on-selected="onSelected"
          />
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DButton from './../DButton'
import DCalendar from './../DCalendar'
import DMotionAxis from './../DMotionAxis'
import DScrollbar from './../DScrollbar'
import { props } from './props'
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import attrCalendar from './../DCalendar/attrCalendar'
import useAdmin from './../../uses/useAdmin'
import useButton from './useButton'
import useCalendar from './useCalendar'

export default {
  name: 'DCalendarSelect',
  components: {
    DButton,
    DCalendar,
    DMotionAxis,
    DScrollbar
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const refs = toRefs(props)

    const motion = ref(undefined)
    const motionYears = ref(undefined)
    const years = ref(undefined)

    const {
      propValue,
      list,
      listYears,
      listMonths,
      active,
      activeLocale,
      toActive,
      toPrevious,
      toNext,
      onSelected,
      onSelectedYear,
      onSelectedMonth,
      onActive
    } = useCalendar(
      motion,
      motionYears,
      undefined,
      years,
      props,
      context
    )

    const bindButton = useButton(props)
    const bindCalendar = attrCalendar({
      props,
      items: { selected: propValue }
    })

    const classList = computed(() => {
      return {
        [`adaptive-${props.calendarAdaptive}`]: props.calendarAdaptive,
        [`shape-${props.calendarShape}`]: props.calendarShape,
        'option-multiple': props.multiple
      }
    })

    watch(refs.value, toActive)
    onMounted(toActive)

    useAdmin('d-calendar-select', context)

    return {
      motion,
      motionYears,
      years,
      propValue,
      list,
      listYears,
      listMonths,
      active,
      activeLocale,
      bindCalendar,
      bindButton,
      classList,
      toPrevious,
      toNext,
      onSelected,
      onSelectedYear,
      onSelectedMonth,
      onActive
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-calendar-select {
  @include calendarSelectInit;
}
</style>
