import { computed, ref } from 'vue'
import Geo from '@/classes/Geo'
import GeoDate from '@/classes/GeoDate'

export default function useDateTime (
  type = 'date',
  props
) {
  const object = (value = undefined) => {
    const date = new GeoDate(props.locales).setType(type)

    if (value) {
      date.setValue(value)
    }

    return date
  }

  const propValue = ref(props.value)
  const propFormat = computed(() => props.format === 'auto' ? object().getFormat() : props.format)

  const hours12 = computed(() => propFormat.value === '12')

  const valueFocus = computed(() => Array.isArray(propValue.value) ? propValue.value?.[0] : propValue.value)
  const valueSecondary = computed(() => Array.isArray(propValue.value) ? propValue.value?.[1] : undefined)
  const today = computed(() => object().toStandard())

  const objectFocus = computed(() => object(valueFocus.value))
  const objectSecondary = computed(() => object(valueSecondary.value))
  const objectMin = computed(() => object(props.min))
  const objectMax = computed(() => object(props.max))

  const textLocale = computed(() => objectFocus.value.toString() +
    (valueSecondary.value ? ` - ${objectFocus.value.toString(valueSecondary.value)}` : ''))
  const textLocaleMonth = computed(() => objectFocus.value.toStringMonth())
  const textLocaleMonthNext = computed(() => objectFocus.value.toStringMonth(objectFocus.value.getNextMonth().toISOString()))

  const listYear = computed(() => {
    const min = objectMin.value.getObject().getFullYear()
    const max = objectMax.value.getObject().getFullYear()
    const list = []

    for (let i = min; i <= max; i++) {
      list.push(i)
    }

    return list
  })
  const listMonth = computed(() => {
    const month = new Geo(props.locales).getListMonth('short')

    month.shift()
    return month
  })
  const listWeekday = computed(() => {
    const week = (new Geo(props.locales)).getListWeekday('narrow')

    week.shift()
    return week
  })

  const getMaxHours = () => hours12.value ? 12 : 23
  const getYear = () => objectFocus.value.getObject().getFullYear()
  const getMonth = () => objectFocus.value.getObject().getMonth() + 1
  const getDay = () => objectFocus.value.getObject().getDate()
  const getHours = () => objectFocus.value.getHours()
  const getHours12 = () => objectFocus.value.getHoursLocale().replace(/[^0-9]+/ig, '')
  const getAmPm = () => getHours() >= 12 ? 'pm' : 'am'
  const getMinutes = () => objectFocus.value.getMinutes()

  const getStandardMonth = () => objectFocus.value.toStandardMonth()
  const getStandardMonthPrevious = () => objectFocus.value.toStandardMonth(objectFocus.value.getPreviousMonth())
  const getStandardMonthNext = () => objectFocus.value.toStandardMonth(objectFocus.value.getNextMonth())

  const getObjectEvent = () => {
    return {
      object: objectFocus.value,
      value: propValue.value,
      text: textLocale
    }
  }

  const updateDate = () => {
    propValue.value = objectFocus.value.toStandard()
  }

  return {
    propValue,
    hours12,
    valueFocus,
    valueSecondary,
    today,
    objectFocus,
    objectSecondary,
    objectMin,
    objectMax,
    textLocale,
    textLocaleMonth,
    textLocaleMonthNext,
    listYear,
    listMonth,
    listWeekday,
    getMaxHours,
    getYear,
    getMonth,
    getDay,
    getHours,
    getHours12,
    getAmPm,
    getMinutes,
    getStandardMonth,
    getStandardMonthPrevious,
    getStandardMonthNext,
    getObjectEvent,
    updateDate
  }
}
