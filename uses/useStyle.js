import { onUpdated } from 'vue'

export default function useStyle (
  element,
  name,
  unit = undefined,
  value = undefined,
  action = undefined,
  autoUpdate = true
) {
  const item = { value }
  const update = () => {
    console.log('name', name, value)

    if (item.value === undefined) {
      element.value?.style?.removeProperty(name)
    } else {
      let value

      if (unit) {
        switch (typeof unit) {
          case 'function':
            value = unit(item.value)
            break
          case 'string':
            value = item.value + unit
            break
        }
      }

      element.value?.style?.setProperty(name, value === undefined ? item.value : value)
    }
  }

  item.set = (value) => {
    if (value !== item.value) {
      item.value = value
      update()

      if (action) {
        action(value)
      }

      return true
    } else {
      return false
    }
  }

  if (autoUpdate) {
    onUpdated(update)
  }

  return item
}
