import { reactive, toRefs } from 'vue'
import forEach from '../functions/forEach'

export default function useBinds (
  code,
  props,
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  const refs = toRefs(binds)
  const data = { ...(binds?.[`${code}Attrs`] || {}) }

  forEach(props, (item, index) => {
    const name = `${code}${index.replace(/^[a-z]/i, all => all.toUpperCase())}`

    if (index in items) {
      data[index] = items[index]
    } else if (name in refs) {
      data[index] = refs[name]
    } else if (pointer.indexOf(index) !== -1) {
      data[index] = refs[index]
    }
  })

  forEach(attrs, (item, index) => {
    if (
      !(index in props) &&
      !(index in data) &&
      typeof item !== 'object'
    ) {
      data[index] = item
    }
  })

  return reactive(data)
}
