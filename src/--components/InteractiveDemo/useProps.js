import forEach from '@/functions/forEach'
import attrs from '@/media/demo/attrs'

const getDefault = (item, value) => value !== undefined && !item?.message ? value : item?.default

export default function useProps (props, binds = {}, nones = []) {
  let items = {}

  forEach(attrs, (values, group) => {
    let add
    const data = {}

    forEach(values, (item, name) => {
      const value = props[name] && ('default' in props[name]) ? props[name].default : undefined

      if (name in binds) {
        add = true
        data[name] = {
          ...binds[name],
          default: getDefault(binds[name], value)
        }
      } else if (
        (name in props) &&
        (nones.indexOf(name) === -1)
      ) {
        add = true
        data[name] = {
          ...item,
          default: getDefault(item, value)
        }
      }
    })

    if (add) {
      items = {
        ...items,
        [group]: { subtitle: group },
        ...data
      }
    }
  })

  return items
}
