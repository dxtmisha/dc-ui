import { onUpdated } from 'vue'
import forEach from '@/functions/forEach'

export default function useClassByFocus (
  elements,
  name,
  value = undefined,
  action = undefined,
  autoUpdate = true
) {
  const item = { value }
  const update = () => forEach(
    elements.value, (element, index) => element.classList?.toggle(name, index === item.value))

  item.set = (value = undefined) => {
    if (value !== item.value) {
      item.value = value
      update()

      if (action) {
        action(value)
      }
    }
  }

  if (autoUpdate) {
    onUpdated(update)
  }

  return item
}
