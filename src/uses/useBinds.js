import { readonly, toRefs } from 'vue'
import forEach from '@/functions/forEach'

export default function useBinds (
  code,
  props,
  binds,
  items = {},
  attrs = {}
) {
  const refs = toRefs(binds)
  const data = { ...(refs?.[`${code}Attrs`] || {}), ...attrs }

  forEach(props, (item, index) => {
    const name = `${code}${index.replace(/^[a-z]/i, all => all.toUpperCase())}`

    if (index in items) {
      data[index] = items[index]
    } else if (name in refs) {
      data[index] = refs[name]
    }
  })

  return readonly(data)
}
