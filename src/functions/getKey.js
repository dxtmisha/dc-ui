import isSelected from './isSelected'

export default function getKey (list, selected, alias = 'value') {
  let index = -1

  for (const key in list) {
    const value = list[key]?.[alias]

    if (
      value === selected ||
      isSelected(value, selected)
    ) {
      index = parseInt(key)
      break
    }
  }

  return index
}
