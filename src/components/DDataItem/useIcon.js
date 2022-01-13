import { toRefs } from 'vue'
import attrIcon from '@/components/DIcon/attrIcon'

export default function useIcon (props) {
  const {
    selected,
    size
  } = toRefs(props)

  return attrIcon({
    props,
    items: {
      active: selected,
      size: size
    }
  })
}
