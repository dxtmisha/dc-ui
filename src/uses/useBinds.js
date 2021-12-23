import { reactive, toRefs } from 'vue'
import forEach from '@/functions/forEach'

export default function useBinds (
  code,
  props,
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  const refs = toRefs(binds)
  const data = { ...(binds?.[`${code}Attrs`] || {}), ...attrs }

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

  return reactive(data)
}
