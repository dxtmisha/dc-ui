import { computed, nextTick, ref } from 'vue'
import useDateTime from '../../uses/useDateTime'

const QUANTITY = 4

export default function useCalendar (
  motion,
  motionYears,
  scroll,
  years,
  props,
  context,
  desktop = undefined
) {
  const list = ref({})
  const listMobile = ref({})
  const active = ref(undefined)

  const {
    propValue,
    objectFocus,
    objectMin,
    objectMax,
    listYear,
    listMonth,
    object,
    getStandardMonth,
    emit
  } = useDateTime('date', props, context)

  const objectActive = computed(() => object(active.value))

  const activeLocale = computed(() => objectActive.value.toStringMonth())
  const activeNext = computed(() => objectActive.value.toStringMonth(objectActive.value.getNextMonth().toISOString()))
  const activeYear = computed(() => objectActive.value.getObject().getFullYear())
  const activeMonth = computed(() => objectActive.value.getObject().getMonth() + 1)
  const activeStandard = computed(() => objectActive.value.toStandard(undefined, 'month'))

  const listYears = computed(() => {
    const list = []

    listYear.value.forEach(year => list.push({
      year,
      class: { 'status-selected': activeYear.value === year }
    }))

    return list
  })
  const listMonths = computed(() => {
    const list = []

    listMonth.value.forEach(item => list.push({
      ...item,
      class: { 'status-selected': activeMonth.value === item.value }
    }))

    return list
  })

  const getActiveItem = () => list.value[active.value]

  const update = (date = undefined) => {
    const value = date || getStandardMonth()
    const geo = object(value)
    const previous = objectFocus.value.toStandardMonth(geo.getPreviousMonth())
    const next = objectFocus.value.toStandardMonth(geo.getNextMonth())

    return new Promise(resolve => {
      if (value in list.value) {
        active.value = value
        resolve(value)
      } else {
        list.value[value] = {
          value,
          previous,
          next,
          slot: geo.toStandardMonth(),
          calendar: [
            {
              value: 'calendarMain',
              item: value
            },
            {
              value: 'calendarNext',
              item: next
            }
          ]
        }

        nextTick().then(() => {
          active.value = value
          resolve(value)
        })
      }
    })
  }
  const updateMobile = (date = undefined) => {
    const value = date || getStandardMonth()
    const month = object(value).getObject()
    const startDay = objectMin.value.getStartDay()
    const endDay = objectMax.value.getEndDay()

    listMobile.value = {}

    return new Promise(resolve => {
      month.setMonth(month.getMonth() - QUANTITY)

      for (let i = 0; i < ((QUANTITY * 2) + 1); i++) {
        const index = objectFocus.value.toStandardMonth(month)

        if (month >= startDay && month <= endDay) {
          listMobile.value[index] = {
            text: objectFocus.value.toStringMonth(index),
            value: index
          }
        }

        month.setMonth(month.getMonth() + 1)
      }

      nextTick().then(() => {
        active.value = value
        resolve(value)
      })
    })
  }

  const toActive = async () => {
    await update()
    motion.value?.toGo(active.value)
  }
  const toActiveMobile = async () => {
    await updateMobile()
    scroll.value?.update()
  }
  const toPrevious = async () => motion.value.toLeft(await update(getActiveItem().previous))
  const toNext = async () => motion.value.toRight(await update(getActiveItem().next))
  const toMobile = async () => desktop.value ? await toActive() : await toActiveMobile()

  const onSelected = ({ selected }) => {
    propValue.value = selected
    emit()
  }
  const onSelectedYear = async year => {
    motionYears.value.getObject().setFullYear(year)
    motion.value.toTop('months')
  }
  const onSelectedMonth = async month => {
    motionYears.value.getObject().setMonth(month - 1)
    requestAnimationFrame(async () => {
      motion.value.toTop(await update(motionYears.value.toStandardMonth()))
      motionYears.value = undefined
    })
  }
  const onActive = async () => {
    if (motionYears.value) {
      motion.value.toBottom(active.value)
      motionYears.value = undefined
    } else {
      motionYears.value = object(active.value)

      await nextTick()

      motion.value.toTop('years')
      years.value.$el
        ?.querySelector(`[data-value="${activeYear.value}"]`)
        ?.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
    }
  }

  return {
    propValue,
    list,
    listMobile,
    listYears,
    listMonths,
    active,
    activeLocale,
    activeNext,
    activeYear,
    activeMonth,
    activeStandard,
    object,
    update,
    updateMobile,
    toActive,
    toPrevious,
    toNext,
    toMobile,
    onSelected,
    onSelectedYear,
    onSelectedMonth,
    onActive
  }
}
