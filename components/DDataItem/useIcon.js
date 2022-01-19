import { computed, toRefs } from 'vue'
import attrIcon from '../DIcon/attrIcon'

export default function useIcon (props) {
  const {
    selected,
    size
  } = toRefs(props)

  return attrIcon({
    props,
    items: {
      icon: computed(() => props.item?.icon || props.icon),
      active: selected,
      size: size
    }
  })
}
