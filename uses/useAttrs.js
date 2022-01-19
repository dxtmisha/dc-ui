import { reactive, toRefs } from 'vue'
import forEach from '../functions/forEach'

export default function useAttrs ({
  code,
  props,
  pointer = [],
  original = {},
  items = {},
  attrs = {}
}) {
  const refs = toRefs(original)
  const data = { ...attrs, ...original?.[`${code}Attrs`] }

  forEach(props, (item, index) => {
    if (
      pointer.indexOf(index) !== -1 &&
      (index in refs)
    ) {
      data[index] = refs[index]
    } else {
      const name = `${code}${index.replace(/^[a-z]/i, all => all.toUpperCase())}`

      if (name in refs) {
        data[index] = refs[name]
      }
    }
  })

  forEach(items, (item, index) => {
    if (index in props || typeof item !== 'object') {
      data[index] = item
    }
  })

  return reactive(data)
}
