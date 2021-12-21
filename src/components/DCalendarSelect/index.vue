<template>
  <div class="d-calendar-select" :class="classList">
    <div class="d-calendar-select__menu">
      <d-button
        v-bind="bindButton"
        :text="activeLocale"
        :icon-trailing="iconArrowDown"
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
          <d-scrollbar
            ref="years"
            class="d-calendar-select__list cs-years"
            :border="true"
          >
            <div
              v-for="item in listYears"
              class="d-calendar-select__item"
              :key="item.year"
            >
              <button
                :class="item.class"
                :data-value="item.year"
                @click="onSelectedYear(item.year)"
              >
                {{ item.year }}
              </button>
            </div>
          </d-scrollbar>
        </template>
        <template v-if="motionYears" v-slot:months>
          <d-scrollbar
            class="d-calendar-select__list cs-month"
            :border="true"
          >
            <div
              v-for="item in listMonths"
              class="d-calendar-select__item"
              :key="item.value"
            >
              <button
                :class="item.class"
                :data-value="item.value"
                @click="onSelectedMonth(item.value)"
              >
                {{ item.text }}
              </button>
            </div>
          </d-scrollbar>
        </template>
        <template
          v-for="item in list"
          :key="item.value"
          v-slot:[item.slot]
        >
          <d-calendar
            v-bind="bindCalendar"
            :value="item.value"
            :selected="propValue"
            @on-selected="onSelected"
          />
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DCalendar from '@/components/DCalendar'
import DMotionAxis from '@/components/DMotionAxis'
import DScrollbar from '@/components/DScrollbar'
import { props } from './props'
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import attrButton from '@/components/DButton/attrButton'
import attrCalendar from '@/components/DCalendar/attrCalendar'
import useAdmin from '@/uses/useAdmin'
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

    const bindCalendar = attrCalendar(props, refs)
    const bindButton = attrButton(props, {}, {
      appearance: 'text',
      size: 'small',
      dense: true,
      lowercase: true,
      ellipsis: true
    })

    const classList = computed(() => {
      return {
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`shape-${props.shape}`]: props.shape,
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
