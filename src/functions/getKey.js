import isSelected from '@/functions/isSelected'

export default function getKey (list, selected, alias = 'value') {
  let index = -1

  for (const key in list) {
    if (isSelected(list[key]?.[alias], selected)) {
      index = parseInt(key)
      break
    }
  }

  return index
}
