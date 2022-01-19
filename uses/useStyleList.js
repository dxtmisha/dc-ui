import forEach from '../functions/forEach'
import useStyle from './useStyle'

export default function useStyleList (
  element,
  names = {},
  unit = undefined,
  values = {},
  action = undefined,
  autoUpdate = true
) {
  const items = { style: [] }

  forEach(names, (name, index) => {
    const itemName = typeof name === 'string' ? name : name?.name
    const itemUnit = typeof name === 'string' ? unit : name?.unit

    items.style.push({
      index,
      item: useStyle(element, itemName, itemUnit, values?.[index], undefined, autoUpdate)
    })
  })

  items.set = values => {
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
  items.reset = (reset = true) => {
    if (reset) {
      items.style.forEach(({ item }) => item.set(undefined))
    }
  }

  return items
}
