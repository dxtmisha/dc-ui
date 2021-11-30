import { onUpdated } from 'vue'

export default function useClass (
  element,
  name,
  value = false,
  action = undefined,
  autoUpdate = true
) {
  const item = { value }
  const update = () => element.value?.classList.toggle(name, item.value)

  item.set = (value) => {
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
