import { computed, readonly, toRefs } from 'vue'

export const useIcon = function (props, context) {
  const {
    // Values
    thumbnail,
    icon,
    iconActive,
    iconTrailing,
    text,

    // Status
    selected,
    turn,
    disabled,

    // Options
    size,
    adaptive,

    // Icon
    iconReadonly,
    iconAnimationShow,
    iconBackground
  } = toRefs(props)

  const optionAdaptive = computed(() => text.value || 'default' in context.slots ? adaptive.value : 'icon')

  const bindThumbnail = readonly({
    class: { 'd-list-item__thumbnail li-thumbnail': true },
    icon: thumbnail,
    iconActive,
    active: selected,
    disabled,
    size,
    background: true
  })
  const bindIcon = readonly({
    class: { 'd-list-item__icon li-icon': true },
    icon,
    iconActive,
    active: selected,
    disabled,
    animationShow: iconAnimationShow,
    background: iconBackground
  })
  const bindTrailing = readonly({
    class: {
      'd-list-item__trailing li-trailing': true,
      'window-control-static': iconReadonly
    },
    icon: iconTrailing,
    turn,
    disabled
  })

  return {
    optionAdaptive,
    bindThumbnail,
    bindIcon,
    bindTrailing
  }
}
