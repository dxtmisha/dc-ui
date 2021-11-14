import { toRefs } from 'vue'
import { getKey } from '@/dcUi'

export const useShifted = function (
  props,
  objectList,
  selectedByValue,
  initFetch,
  onInput
) {
  const {
    // Values
    multiple
  } = toRefs(props)

  const shiftedValue = async (value) => {
    if (!multiple.value) {
      await initFetch(true)

      const list = objectList.value.getAll()
      const length = list.length

      let index = getKey(list, selectedByValue.value) + value

      if (index >= length) {
        index = 0
      } else if (index < 0) {
        index = length - 1
      }

      onInput({ value: list[index]?.value })
    }
  }

  const previous = () => shiftedValue(-1)
  const next = () => shiftedValue(1)

  return {
    previous,
    next
  }
}
