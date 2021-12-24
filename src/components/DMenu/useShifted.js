import getKey from '@/functions/getKey'

export default function useShifted (
  props,
  selected,
  object,
  beforeOpening,
  onInput
) {
  const getItem = (focus, direction, max = 24) => {
    const list = object.value.getAll()
    const length = list.length
    let index = getKey(list, focus) + direction

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
        list[index]?.space ||
        list[index]?.value === undefined
      )
    ) {
      return getItem(list[index]?.value, direction, max - 1)
    } else {
      return list[index]?.value
    }
  }

  const shifted = async direction => {
    if (!props.multiple && !props.disabled) {
      await beforeOpening(true)
      onInput({ value: getItem(selected.value, direction) })
    }
  }

  const previous = () => shifted(-1)
  const next = () => shifted(1)

  return {
    previous,
    next
  }
}
