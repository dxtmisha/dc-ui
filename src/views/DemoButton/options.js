import {
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
  optionsIcon,
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
  values
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
  selected,
  turn,
  dragged,
  readonly,
  disabled,
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
  ripple,

  optionsIcon,
  icon,
  iconActive,
  iconTrailing,
  iconReadonly,
  iconHide,
  iconAnimationShow,
  iconBackground
}
