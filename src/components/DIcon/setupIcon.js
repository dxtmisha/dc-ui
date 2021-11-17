import { readonly } from 'vue'

export const setupIcon = function (
  className,
  icon,
  iconActive,
  iconTrailing,
  thumbnail,
  active,
  turn,
  disabled,
  hide,
  size,
  animationHide,
  animationShow,
  background,
  iconStatic
) {
  const bindThumbnail = readonly({
    class: { [`${className}-thumbnail`]: true },
    icon: thumbnail,
    iconActive,
    active,
    disabled,
    hide,
    size,
    animationHide,
    animationShow,
    background: true
  })

  const bindIcon = readonly({
    class: { [`${className}-icon`]: true },
    icon,
    iconActive,
    active,
    disabled,
    hide,
    animationHide,
    animationShow,
    background
  })

  const bindTrailing = readonly({
    class: {
      [`${className}-trailing`]: true,
      'window-control-static': iconStatic
    },
    icon: iconTrailing,
    turn,
    disabled
  })

  return {
    bindThumbnail,
    bindIcon,
    bindTrailing
  }
}
