import {
  active,
  adaptive,
  align,
  dense,
  disabled,
  dragged,
  icon,
  iconActive,
  iconAnimationShow,
  iconBackground,
  iconHide,
  iconReadonly,
  iconTrailing,
  lowercase,
  options,
  optionIcon,
  palette,
  progress,
  readonly,
  ripple,
  selected,
  shape,
  size,
  status,
  text,
  turn,
  values, hide, ellipsis
} from '@/media/demo/options'
import { badgeBadge } from '@/views/DemoBadge/options'

export const buttonAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'text' },
    { value: 'text-color' },
    { value: 'outlined' },
    { value: 'outlined-color' },
    { value: 'outlined-contained' },
    { value: 'contained' },
    { value: 'fab' },
    { value: 'chip' },
    { value: 'chip-color' },
    { value: 'chip-outlined' }
  ]
}

export const optionsButton = {
  values,
  badgeBadge,
  text,

  status,
  active,
  selected,
  turn,
  dragged,
  readonly,
  disabled,
  hide,
  progress,

  options,
  palette,
  buttonAppearance,
  size,
  shape,
  align,
  adaptive,
  lowercase,
  dense,
  ellipsis,
  ripple,

  optionIcon,
  icon,
  iconActive,
  iconTrailing,
  iconReadonly,
  iconHide,
  iconAnimationShow,
  iconBackground
}
