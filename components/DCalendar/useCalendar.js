import { computed } from 'vue'
import isSelected from './../../functions/isSelected'

export default function useCalendar (
  props,
  hover,
  today,
  objectFocus,
  objectMin,
  objectMax
) {
  const isBetween = (value, selected) => Array.isArray(selected) && selected.length > 1
    ? [...selected, value].sort()[1] === value
    : false

  const days = computed(() => {
    const data = []
    const date = objectFocus.value.getStartDayByWeekday()
    const firstDay = objectFocus.value.getFirstDayNumber()
    const month = objectFocus.value.getObject().getMonth()
    const maxDay = (objectFocus.value.getEndDayByWeekday() - date) / 1000 / 60 / 60 / 24
    let weekNumber = 0
    let old

    for (let i = 0; i < maxDay; i++) {
      const week = date.getDay()
      const value = objectFocus.value.toStandard(date)
      const end = weekNumber++ === 6
      const focus = date.getMonth()

      if (
        old &&
        old.focus &&
        focus !== month
      ) {
        old.endDay = true
      }

      data.push(old = {
        name: date.getDate(),
        week,
        value,
        today: props.today && today.value === value,
        start: week === firstDay,
        end: end,
        endDay: false,
        focus: focus === month,
        output: focus !== month || objectMin.value.getObject() > date || objectMax.value.getObject() < date
      })

      if (weekNumber === 7) {
        weekNumber = 0
      }

      date.setDate(date.getDate() + 1)
    }

    return data
  })
  const selected = computed(() => {
    const data = days.value

    data.forEach(item => {
      item.selected = isSelected(item.value, props.selected)
      item.between = isBetween(item.value, props.selected)
      item.classList = {
        'status-today': item.today,
        'status-selected': item.selected,
        'status-between': item.between,
        'status-start': item.start,
        'status-end': item.end,
        'status-end-day': item.endDay,
        'status-focus': item.focus,
        'status-output': item.output
      }
    })

    return data
  })
  const list = computed(() => {
    const data = selected.value

    data.forEach(item => {
      item.classList['status-hover'] = !item.between && isBetween(item.value, hover.value)
    })

    return data
  })

  const updateSelect = value => {
    let data

    if (props.multiple) {
      data = Array.isArray(props.selected) && props.selected.length < 2 ? props.selected : []
      data.push(value)
      data.sort()
    } else {
      data = value
    }

    return data
  }

  return {
    list,
    updateSelect
  }
}
