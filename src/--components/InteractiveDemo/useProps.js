import forEach from '@/functions/forEach'
import attrs from '@/media/demo/attrs'

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
          default: value !== undefined ? value : binds[name]?.default
        }
      } else if (
        (name in props) &&
        (nones.indexOf(name) === -1)
      ) {
        add = true
        data[name] = {
          ...item,
          default: value !== undefined ? value : item?.default
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
