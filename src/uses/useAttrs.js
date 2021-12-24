import { isReactive, reactive, toRefs } from 'vue'
import forEach from '@/functions/forEach'

export default function useAttrs ({
  code,
  original,
  props = {},
  items = {},
  attrs = {},
  pointer = []
}) {
  const refs = isReactive(props) ? toRefs(props) : props
  const data = { ...attrs, ...props?.[`${code}Attrs`] }

  forEach(original, (item, index) => {
    const name = `${code}${index.replace(/^[a-z]/i, all => all.toUpperCase())}`

    if (name in refs) {
      data[index] = refs[name]
    } else if (pointer.indexOf(index) !== -1) {
      data[index] = refs[index]
    }
  })

  forEach(items, (item, index) => {
    if (index in original || typeof item !== 'object') {
      data[index] = item
    }
  })

  return reactive(data)
}
