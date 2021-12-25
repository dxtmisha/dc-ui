<template>
  <div ref="calendar" :class="classList" class="d-calendar-multiple">
    <template v-if="active && desktop !== undefined">
      <div v-if="desktop" class="d-calendar-multiple__desktop">
        <div class="d-calendar-multiple__menu">
          <d-button v-bind="bindButton" :icon="iconChevronLeft" @click="toPrevious"/>
          <div class="d-calendar-multiple__name">{{ activeLocale }}</div>
          <div class="d-calendar-multiple__name">{{ activeNext }}</div>
          <d-button v-bind="bindButton" :icon="iconChevronRight" @click="toNext"/>
        </div>

        <d-motion-axis ref="motion">
          <template v-for="{calendar, slot, value} in list" :key="value" v-slot:[slot]>
            <div class="d-calendar-multiple__calendars">
              <d-calendar
                v-for="{item, value} in calendar"
                v-bind="bindCalendar"
                :key="value"
                :ref="value"
                :selected="propValue"
                :value="item"
                @on-selected="onSelected"
                @on-hover="onHover"
              />
            </div>
          </template>
        </d-motion-axis>
      </div>

      <div v-else-if="listMobile" class="d-calendar-multiple__mobile">
        <div class="d-calendar-multiple__week">
          <d-calendar v-bind="bindCalendar" :output-month="false" :value="undefined"/>
        </div>

        <d-motion-scroll
          ref="scroll"
          :class="classScroll"
          :page="activeStandard"
          class="d-calendar-multiple__calendar"
          @on-scroll="onScroll"
        >
          <template v-slot:default="{ className }">
            <div
              v-for="{text, value} in listMobile"
              :key="value"
              :class="className"
              :data-page="value"
            >
              <div class="d-calendar-multiple__title">{{ text }}</div>
              <d-calendar
                v-bind="bindCalendar"
                :output-week="false"
                :selected="propValue"
                :value="value"
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
import DButton from '@/components/DButton'
import DCalendar from '@/components/DCalendar'
import DMotionAxis from '@/components/DMotionAxis'
import DMotionScroll from '@/components/DMotionScroll'
import { props } from './props'
import { computed, ref, toRefs, watch } from 'vue'
import attrCalendar from '@/components/DCalendar/attrCalendar'
import useAdmin from '@/uses/useAdmin'
import useButton from '@/components/DCalendarSelect/useButton'
import useCalendar from '@/components/DCalendarSelect/useCalendar'
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
    const refs = toRefs(props)

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

    const bindButton = useButton(props)
    const bindCalendar = attrCalendar({
      props,
      attrs: {
        multiple: true,
        outputDay: false
      }
    })

    const classScroll = useScroll()
    const classList = computed(() => {
      return { [`adaptive-${props.calendarAdaptive}`]: props.calendarAdaptive }
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

    watch([
      desktop,
      refs.value,
      refs.min,
      refs.max
    ], toMobile)

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
