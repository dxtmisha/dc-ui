import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import useDateTime from '@/uses/useDateTime'

export default function useCalendar (
  motion,
  motionYears,
  years,
  props,
  context
) {
  const { value } = toRefs(props)

  const list = ref({})
  const active = ref(undefined)

  const {
    propValue,
    objectFocus,
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
          slot: geo.toStandardMonth()
        }

        nextTick().then(() => {
          active.value = value
          resolve(value)
        })
      }
    })
  }

  const toActive = async () => {
    await update()
    motion.value.toGo(active.value)
  }
  const toPrevious = async () => motion.value.toLeft(await update(getActiveItem().previous))
  const toNext = async () => motion.value.toRight(await update(getActiveItem().next))

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
    motion.value.toTop(await update(motionYears.value.toStandardMonth()))

    motionYears.value = undefined
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

  watch(value, toActive)
  onMounted(toActive)

  return {
    propValue,
    list,
    listYears,
    listMonths,
    active,
    activeLocale,
    activeNext,
    activeYear,
    activeMonth,
    activeStandard,
    object,
    toActive,
    toPrevious,
    toNext,
    onSelected,
    onSelectedYear,
    onSelectedMonth,
    onActive
  }
}
