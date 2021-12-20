<template>
  <div
    ref="calendar"
    :class="classList"
  >
    <template v-if="active && desktop !== undefined">
      <div
        v-if="desktop"
        class="d-calendar-multiple__desktop"
      >
        <div class="d-calendar-multiple__menu">
          <d-button
            v-bind="bindButton"
            :icon="iconChevronLeft"
            @click="toPrevious"
          />
          <div class="d-calendar-multiple__name">{{ activeLocale }}</div>
          <div class="d-calendar-multiple__name">{{ activeNext }}</div>
          <d-button
            v-bind="bindButton"
            :icon="iconChevronRight"
            @click="toNext"
          />
        </div>
        <d-motion-axis ref="motion">
          <template
            v-for="item in list"
            :key="item.value"
            v-slot:[item.slot]
          >
            <div class="d-calendar-multiple__calendars">
              <d-calendar
                :ref="calendar.value"
                v-for="calendar in item.calendar"
                :key="calendar.value"
                v-bind="bindCalendar"
                :value="calendar.item"
                :selected="propValue"
                @on-selected="onSelected"
                @on-hover="onHover"
              />
            </div>
          </template>
        </d-motion-axis>
      </div>
      <div v-else-if="listMobile" class="d-calendar-multiple__mobile">
        <div class="d-calendar-multiple__week">
          <d-calendar
            v-bind="bindCalendar"
            :multiple="true"
            :output-month="false"
          />
        </div>
        <d-motion-scroll
          ref="scroll"
          class="d-calendar-multiple__calendar"
          :class="classScroll"
          :page="activeStandard"
          @on-scroll="onScroll"
        >
          <template v-slot:default="{ className }">
            <div
              v-for="item in listMobile"
              :key="item.value"
              :class="className"
              :data-page="item.value"
            >
              <div class="d-calendar-multiple__title">{{ item.text }}</div>
              <d-calendar
                v-bind="bindCalendar"
                :value="item.value"
                :selected="propValue"
                :output-week="false"
                @on-selected="onSelected"
              />
            </div>
          </template>
        </d-motion-scroll>
      </div>
    </template>
  </div>
</template>

<script>
import DButton from '@/--components/DButton'
import DCalendar from '@/--components/DCalendar'
import DMotionAxis from '@/--components/DMotionAxis'
import DMotionScroll from '@/--components/DMotionScroll'
import { props } from './props'
import { computed, ref, toRefs, watch } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCalendar from '@/--components/DCalendarSelect/useCalendar'
import useDesktop from './useDesktop'
import useScroll from '@/uses/useScroll'

export default {
  name: 'DCalendarMultiple',
  components: {
    DButton,
    DCalendar,
    DMotionAxis,
    DMotionScroll
  },
  props,
  setup (props, context) {
    const {
      value,
      min,
      max
    } = toRefs(props)

    const calendar = ref(undefined)
    const calendarMain = ref(undefined)
    const calendarNext = ref(undefined)
    const motion = ref(undefined)
    const scroll = ref(undefined)

    const { desktop } = useDesktop(calendar, props)

    const {
      propValue,
      list,
      listMobile,
      active,
      activeLocale,
      activeNext,
      activeStandard,
      updateMobile,
      toPrevious,
      toNext,
      toMobile,
      onSelected
    } = useCalendar(
      motion,
      undefined,
      scroll,
      undefined,
      props,
      context,
      desktop
    )

    const bindButton = computed(() => {
      return {
        appearance: 'text',
        shape: props.shape,
        size: 'small'
      }
    })
    const bindCalendar = computed(() => {
      return {
        multiple: true,
        min: props.min,
        max: props.max,
        locales: props.locales,
        shape: props.shape,
        adaptive: props.adaptive,
        today: props.today,
        outputDay: false
      }
    })

    const classScroll = useScroll()
    const classList = computed(() => {
      return {
        'd-calendar-multiple': true,
        [`adaptive-${props.adaptive}`]: props.adaptive
      }
    })

    const onHover = ({ item }) => [
      calendarMain.value,
      calendarNext.value
    ].forEach(calendar => {
      if (item) {
        calendar.onMouseover(item)
      } else {
        calendar.onMouseout()
      }
    })
    const onScroll = async ({ value }) => await updateMobile(value)

    watch([value, desktop, min, max], toMobile)

    useAdmin('d-calendar-multiple', context)

    return {
      calendar,
      calendarMain,
      calendarNext,
      motion,
      scroll,
      desktop,
      propValue,
      list,
      listMobile,
      active,
      activeLocale,
      activeNext,
      activeStandard,
      bindButton,
      bindCalendar,
      classList,
      classScroll,
      toPrevious,
      toNext,
      onSelected,
      onHover,
      onScroll
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-calendar-multiple {
  @include calendarMultipleInit;
}
</style>
