import attrIcon from '../DIcon/attrIcon'
import { computed, toRefs } from 'vue'

export default function useIcon (props) {
  const {
    selected,
    activeTrailing,
    turn,
    iconTrailing,
    iconTrailingActive,
    iconCancel,
    iconChevronLeft,
    iconChevronRight
  } = toRefs(props)

  const attrs = { size: 'small' }
  const noneActive = {
    iconActive: undefined,
    active: undefined
  }

  const bindIcon = attrIcon({
    props,
    items: { active: selected },
    attrs
  })

  const bindTrailing = attrIcon({
    props,
    items: {
      ...noneActive,
      icon: iconTrailing,
      iconActive: iconTrailingActive,
      active: activeTrailing,
      turn
    },
    attrs
  })

  const bindCancel = attrIcon({
    props,
    items: {
      ...noneActive,
      icon: iconCancel
    },
    attrs
  })

  const bindPrevious = attrIcon({
    props,
    items: {
      ...noneActive,
      icon: iconChevronLeft,
      disabled: computed(() => props.disabled || props.disabledPrevious),
      background: true
    },
    attrs
  })

  const bindNext = attrIcon({
    props,
    items: {
      ...noneActive,
      icon: iconChevronRight,
      disabled: computed(() => props.disabled || props.disabledNext),
      background: true
    },
    attrs
  })

  return {
    bindIcon,
    bindTrailing,
    bindCancel,
    bindPrevious,
    bindNext
  }
}
