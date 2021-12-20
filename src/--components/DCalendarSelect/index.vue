<template>
  <div :class="classList">
    <div class="d-calendar-select__menu">
      <d-button
        v-bind="bindButton"
        :text="activeLocale"
        :icon-trailing="iconArrowDown"
        :turn="!!motionYears"
        :dense="true"
        :lowercase="true"
        @click="onActive"
      />
      <div class="d-calendar-select__space"/>
      <template v-if="!motionYears">
        <d-button
          v-bind="bindButton"
          :icon="iconChevronLeft"
          shape="pill"
          @click="toPrevious"
        />
        <d-button
          v-bind="bindButton"
          :icon="iconChevronRight"
          shape="pill"
          @click="toNext"
        />
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
            :value="item.value"
            :multiple="multiple"
            :min="min"
            :max="max"
            :selected="propValue"
            :locales="locales"
            :shape="shape"
            :adaptive="adaptive"
            :today="today"
            @on-selected="onSelected"
          />
        </template>
      </d-motion-axis>
    </div>
  </div>
</template>

<script>
import DCalendar from '@/--components/DCalendar'
import DButton from '@/--components/DButton'
import DMotionAxis from '@/components/DMotionAxis'
import DScrollbar from '@/components/DScrollbar'
import { props } from './props'
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCalendar from './useCalendar'

export default {
  name: 'DCalendarSelect',
  components: {
    DScrollbar,
    DButton,
    DCalendar,
    DMotionAxis
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const { value } = toRefs(props)

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

    const bindButton = computed(() => {
      return {
        appearance: 'text',
        shape: props.shape,
        size: 'small'
      }
    })

    const classList = computed(() => {
      return {
        'd-calendar-select': true,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`shape-${props.shape}`]: props.shape,
        'option-multiple': props.multiple
      }
    })

    watch(value, toActive)
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
