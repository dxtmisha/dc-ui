import forEach from '@/functions/forEach'
import useStyle from '@/uses/useStyle'

export default function useStyleList (
  element,
  names = {},
  unit = undefined,
  values = {},
  action = undefined,
  autoUpdate = true
) {
  const items = {
    style: [],
    set: values => {
      const update = []

      if (values) {
        items.style.forEach(item => {
          if (
            item.index in values &&
            item.item.set(values[item.index])
          ) {
            update.push(item.index)
          }
        })

        if (update.length > 0 && action) {
          action(update)
        }
      }

      return update
    }
  }

  forEach(names, (name, index) => {
    items.style.push({
      index,
      item: useStyle(element, name, unit, values?.[index], undefined, autoUpdate)
    })
  })

  return items
}
