import { toRefs } from 'vue'
import attrMenu from '@/components/DMenu/attrMenu'

export default function useMenu (props, propList) {
  const refs = toRefs(props)

  return attrMenu(props, {
    ...refs,
    list: propList,
    selected: refs.value,
    tag: 'span',
    axis: 'y'
  })
}
