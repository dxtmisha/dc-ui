import { computed, readonly, toRefs } from 'vue'

export const useIcon = function (props, optionAdaptive) {
  const {
    // Values
    icon,
    iconActive,
    iconTrailing,

    // Status
    selected,
    turn,
    disabled,
    iconHide,

    // Options
    shape,

    // Icon
    iconReadonly,
    iconAnimationShow,
    iconBackground
  } = toRefs(props)

  const animationHide = computed(() => {
    return optionAdaptive.value === 'icon' ? 'type1' : 'type2'
  })

  const bindIcon = readonly({
    icon,
    iconActive,
    active: selected,
    disabled,
    hide: iconHide,
    shape,
    animationHide,
    animationShow: iconAnimationShow,
    background: iconBackground
  })

  const bindTrailing = readonly({
    class: { 'window-control-static': iconReadonly.value },
    icon: iconTrailing,
    turn,
    disabled,
    shape
  })

  return {
    bindIcon,
    bindTrailing
  }
}
