import { computed, readonly, toRefs } from 'vue'

export const useIcon = function (props, context) {
  const {
    // Values
    icon,
    iconActive,
    iconTrailing,
    text,

    // Status
    selected,
    turn,
    disabled,
    iconHide,

    // Options
    shape,
    adaptive,

    // Icon
    iconReadonly,
    iconAnimationShow,
    iconBackground
  } = toRefs(props)

  const optionAdaptive = computed(() => text.value || 'default' in context.slots ? adaptive.value : 'icon')
  const animationHide = computed(() => optionAdaptive.value === 'icon' ? 'type1' : 'type2')

  const bindIcon = readonly({
    class: { 'd-button__icon bt-icon': true },
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
    class: {
      'd-button__icon bt-trailing': true,
      'window-control-static': iconReadonly
    },
    icon: iconTrailing,
    turn,
    disabled,
    shape
  })

  return {
    optionAdaptive,
    bindIcon,
    bindTrailing
  }
}
