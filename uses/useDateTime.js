import { computed, ref, toRefs, watch } from 'vue'
import Geo from '../classes/Geo'
import GeoDate from '../classes/GeoDate'

export default function useDateTime (
  type,
  props,
  context
) {
  const { value } = toRefs(props)

  const object = (value = undefined) => {
    const date = new GeoDate(props.locales).setType(type)

    if (value) {
      date.setValue(value)
    }

    return date
  }

  const propValue = ref(props?.value)
  const propOld = ref(props?.value)
  const propFormat = computed(() => props.format === 'auto' ? object().getFormat() : props.format)

  const type12 = computed(() => propFormat.value === '12')

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

  const hours12 = computed(() => objectFocus.value.getHoursLocale().replace(/[^0-9]+/ig, ''))
  const hoursMin = computed(() => {
    const min = parseInt(props.min.split(':')[0])
    return type12.value && amPm.value === 'pm' && min < 12
      ? 0
      : min
  })
  const hoursMax = computed(() => {
    const max = parseInt(props.max.split(':')[0])
    return !(type12.value && max > 12)
      ? max
      : amPm.value === 'am'
        ? 12
        : max - 12
  })
  const amPm = computed(() => getHours() >= 12 ? 'pm' : 'am')
  const minutes = computed(() => objectFocus.value.getMinutes())
  const minutesMin = computed(() => hoursMin.value === parseInt(hours12.value) ? parseInt(props.min.split(':')[1]) : 0)
  const minutesMax = computed(() => {
    const max = props.max.split(':')
    return hoursMax.value === parseInt(hours12.value) && max[0] !== '24' ? parseInt(max[1]) : 59
  })

  const getItemFocus = () => objectFocus.value.getObject()
  const getItemSecondary = () => objectSecondary.value.getObject()
  const getMaxHours = () => type12.value ? 12 : 23
  const getYear = () => objectFocus.value.getObject().getFullYear()
  const getMonth = () => objectFocus.value.getObject().getMonth() + 1
  const getDay = () => objectFocus.value.getObject().getDate()
  const getHours = () => objectFocus.value.getHours()

  const getStandardMonth = () => objectFocus.value.toStandardMonth()
  const getStandardMonthPrevious = () => objectFocus.value.toStandardMonth(objectFocus.value.getPreviousMonth())
  const getStandardMonthNext = () => objectFocus.value.toStandardMonth(objectFocus.value.getNextMonth())

  const updateDate = () => {
    propValue.value = objectFocus.value.toStandard()
  }
  const resetDate = () => {
    propValue.value = propOld.value
  }
  const emit = (type = 'on-input') => context.emit(type, {
    objectFocus: objectFocus.value,
    objectSecondary: objectSecondary.value,
    value: propValue.value,
    text: textLocale.value
  })

  watch(value, value => {
    propValue.value = value
    propOld.value = value
  })

  return {
    propValue,
    propOld,
    propFormat,
    type12,
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
    hours12,
    hoursMin,
    hoursMax,
    amPm,
    minutes,
    minutesMin,
    minutesMax,
    object,
    getItemFocus,
    getItemSecondary,
    getMaxHours,
    getYear,
    getMonth,
    getDay,
    getHours,
    getStandardMonth,
    getStandardMonthPrevious,
    getStandardMonthNext,
    updateDate,
    resetDate,
    emit
  }
}
