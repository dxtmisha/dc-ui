import { computed, toRefs } from 'vue'
import attrIcon from './../DIcon/attrIcon'

export default function useIcon (
  props,
  propAdaptive
) {
  const {
    iconTrailing,
    turn
  } = toRefs(props)

  const size = 'small'

  const bindIcon = attrIcon({
    props,
    items: {
      active: computed(() => props.selected || props.active)
    },
    attrs: {
      size,
      animationHide: computed(() => propAdaptive.value === 'icon' ? 'type1' : 'type2')
    }
  })

  const bindTrailing = attrIcon({
    props,
    items: {
      icon: iconTrailing,
      iconActive: undefined,
      active: false,
      turn,
      hide: false,
      animationShow: false,
      background: false
    },
    attrs: {
      class: computed(() => {
        return { 'window-control-static': props.iconReadonly }
      }),
      size
    }
  })

  return {
    bindIcon,
    bindTrailing
  }
}
