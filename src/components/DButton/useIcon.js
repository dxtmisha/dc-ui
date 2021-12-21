import { computed, toRefs } from 'vue'
import attrIcon from '@/components/DIcon/attrIcon'

export default function useIcon (
  props,
  propAdaptive
) {
  const {
    icon,
    iconActive,
    iconTrailing,
    turn,
    disabled
  } = toRefs(props)

  const size = 'small'

  const bindIcon = attrIcon(
    props,
    {
      icon,
      iconActive,
      active: computed(() => props.selected || props.active),
      disabled,
      size,
      animationHide: computed(() => propAdaptive.value === 'icon' ? 'type1' : 'type2')
    }
  )

  const bindTrailing = attrIcon(
    props,
    {
      icon: iconTrailing,
      active: false,
      turn,
      disabled,
      hide: false,
      size,
      animationShow: false,
      background: false
    },
    {
      class: computed(() => {
        return { 'window-control-static': props.iconReadonly }
      })
    }
  )

  return {
    bindIcon,
    bindTrailing
  }
}
