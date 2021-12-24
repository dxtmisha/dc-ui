import { computed, toRefs } from 'vue'
import attrIcon from '@/components/DIcon/attrIcon'

export default function useIcon (props) {
  const {
    selected,
    turn,
    size,
    thumbnail,
    iconTrailing
  } = toRefs(props)

  const bindThumbnail = attrIcon({
    props,
    items: {
      icon: thumbnail,
      active: selected,
      size: size,
      background: true
    }
  })

  const bindIcon = attrIcon({
    props,
    items: { active: selected },
    attrs: { size: 'small' }
  })

  const bindTrailing = attrIcon({
    props,
    items: {
      icon: iconTrailing,
      iconActive: undefined,
      active: undefined,
      turn: turn,
      animationShow: undefined,
      background: false
    },
    attrs: {
      class: computed(() => {
        return { 'window-control-static': props.iconReadonly }
      }),
      size: 'small'
    }
  })

  return {
    bindThumbnail,
    bindIcon,
    bindTrailing
  }
}
