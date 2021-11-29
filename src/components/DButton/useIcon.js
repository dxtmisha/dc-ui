import { computed } from 'vue'

export default function useIcon (
  props,
  propAdaptive
) {
  const bindIcon = computed(() => {
    return {
      class: 'd-button__icon bt-icon',
      icon: props.icon,
      iconActive: props.iconActive,
      active: props.selected,
      disabled: props.disabled,
      hide: props.iconHide,
      size: 'small',
      animationHide: propAdaptive.value === 'icon' ? 'type1' : 'type2',
      animationShow: props.iconAnimationShow,
      background: props.iconBackground
    }
  })
  const bindTrailing = computed(() => {
    return {
      class: 'd-button__icon bt-trailing',
      icon: props.iconTrailing,
      turn: props.turn,
      disabled: props.disabled,
      size: 'small'
    }
  })

  return {
    bindIcon,
    bindTrailing
  }
}
