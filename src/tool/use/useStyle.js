import { ref, watch } from 'vue'

export const useStyle = function (
  element,
  name,
  unit = undefined,
  index = undefined
) {
  const item = index || ref(false)

  watch(item, (value) => {
    if (value === undefined) {
      element.value?.style.removeProperty(name)
    } else {
      let read

      if (unit) {
        switch (typeof unit) {
          case 'function':
            read = unit(value)
            break
          case 'string':
            read = value + unit
            break
        }
      } else {
        read = value
      }

      element.value?.style.setProperty(name, read === undefined ? value : read)
    }
  })

  return item
}
