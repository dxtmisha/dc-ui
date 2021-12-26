import { computed, toRefs } from 'vue'
import useWatch from '@/uses/useWatch'

export default function useSelect (props, context) {
  const {
    selected,
    type
  } = toRefs(props)

  const items = useWatch(type, () => [], ['init'])
  const propSelect = useWatch(selected, () => selected.value, ['init'])

  const rotate = computed(() => {
    let rotate = 360 / 60

    switch (props.type) {
      case '12':
      case '24':
        rotate = 360 / 12
        break
    }

    return rotate
  })
  const list = computed(() => {
    const list = []
    let max = 60

    switch (props.type) {
      case '12':
        max = 12
        break
      case '24':
        max = 24
        break
    }

    for (let i = 1; i <= max; i++) {
      const value = i === max && max !== 12 ? 0 : i
      const valueRotate = `${rotate.value * i}deg`
      const name = value < 10 ? `0${value}` : `${value}`

      list.push({
        name,
        rotate: valueRotate,
        section: max === 24 && (value > 12 || value === 0),
        style: { '--_cf__vl-rotate': valueRotate },
        value,
        disabled: value < props.min || value > props.max
      })
    }

    return list
  })
  const focus = computed(() => list.value.find(item => item.value === propSelect.value))

  const setSelect = (x, y) => {
    const focus = {
      distance: undefined,
      item: undefined
    }

    items.value.forEach(
      /**
       * @param {HTMLElement} element
       * @param {Number} key
       */
      (element, key) => {
        const rect = element.getBoundingClientRect()
        const elementX = x - (rect.left + (rect.width / 2))
        const elementY = y - (rect.top + (rect.height / 2))
        const distance = Math.abs(elementX * elementX) + Math.abs(elementY * elementY)

        if (
          focus.distance === undefined ||
          focus.distance > distance
        ) {
          focus.distance = distance
          focus.item = list.value[key]
        }
      }
    )

    if (
      propSelect.value !== focus.item.value &&
      !focus.item.disabled
    ) {
      propSelect.value = focus.item.value
      return focus.item
    } else {
      return null
    }
  }
  const emit = (type = 'on-input') => {
    context.emit(type, {
      clock: props.type,
      item: focus.value,
      value: propSelect.value
    })
  }

  const styleSelect = computed(() => {
    return { '--_cf__ar-rotate': `${rotate.value * propSelect.value}deg` }
  })
  const styleHour = computed(() => {
    let rotate = 360 / 12 * props.hour

    if (props.minute > -1) {
      rotate += 360 / 12 / 60 * props.minute
    }

    if (props.second > -1) {
      rotate += 360 / 12 / 60 / 60 * props.second
    }

    return { '--_cf__ar-rotate': `${rotate}deg` }
  })
  const styleMinute = computed(() => {
    let rotate = 360 / 60 * props.minute

    if (props.second > -1) {
      rotate += 360 / 60 / 60 * props.second
    }

    return { '--_cf__ar-rotate': `${rotate}deg` }
  })
  const styleSecond = computed(() => {
    return { '--_cf__ar-rotate': `${360 / 60 * props.second}deg` }
  })

  return {
    items,
    propSelect,
    list,
    focus,
    styleSelect,
    styleHour,
    styleMinute,
    styleSecond,
    setSelect,
    emit
  }
}
