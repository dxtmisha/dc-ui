import { getKey } from '@/tool/functions'

export const useShifted = function (
  multiple,
  selected,
  disabled,
  object,
  beforeOpening,
  onInput
) {
  const getItem = (focus, value, max = 24) => {
    const list = object.value.getAll()
    const length = list.length
    let index = getKey(list, focus) + value

    if (index >= length) {
      index = 0
    } else if (index < 0) {
      index = length - 1
    }

    if (
      max > 1 && (
        list[index]?.list ||
        list[index]?.menu ||
        list[index]?.html ||
        list[index]?.subtitle ||
        list[index]?.line ||
        list[index]?.space
      )
    ) {
      return getItem(list[index]?.value, value, max - 1)
    } else {
      return list[index]?.value
    }
  }

  const shifted = async (value) => {
    if (!multiple.value && !disabled.value) {
      await beforeOpening(true)
      onInput({ value: getItem(selected.value, value) })
    }
  }

  const previous = () => shifted(-1)
  const next = () => shifted(1)

  return {
    previous,
    next
  }
}
