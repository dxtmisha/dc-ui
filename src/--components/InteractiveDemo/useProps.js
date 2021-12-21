import forEach from '@/functions/forEach'
import attrs from '@/media/demo/attrs'

let items

const getDefault = (item, value) => [undefined, -1].indexOf(value) !== -1 || item?.message ? item?.default : value
const getItems = () => {
  if (items === undefined) {
    items = {}

    forEach(attrs, (values, group) => {
      forEach(values, (item, name) => {
        items[name] = {
          group,
          ...item
        }
      })
    })
  }

  return items
}

export default function useProps (props, binds = {}, nones = []) {
  const items = getItems()
  const values = {}

  forEach(props, (item, index) => {
    let value

    if (index in binds) {
      value = binds[index]
    } else if (
      index in items &&
      nones.indexOf(index) === -1
    ) {
      value = items[index]
    }

    if (value) {
      const group = items?.[index]?.group

      if (!(group in values)) {
        values[group] = { subtitle: group }
      }

      values[index] = {
        ...value,
        default: getDefault(value, typeof item === 'object' && 'default' in item ? item.default : undefined)
      }
    }
  })

  return values
}
