import { badgeBadge } from '@/views/DemoBadge/options'
import { iconSize } from '@/views/DemoIcon/options'
import {
  adaptive,
  backgroundColor,
  border,
  dense,
  description,
  disabled,
  focus,
  hide,
  icon,
  iconActive,
  iconAnimationShow,
  iconBackground,
  iconReadonly,
  iconTrailing,
  navigationRail,
  options,
  optionIcon,
  palette,
  prefix,
  progress,
  ripple,
  selected,
  shape,
  status,
  suffix,
  text,
  textShort,
  thumbnail,
  turn,
  underline,
  values
} from '@/media/--demo/options'

export const listItemAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'color' },
    { value: 'contained' },
    { value: 'contained-status' }
  ]
}

export const optionsListItem = {
  values,
  text,
  textShort,
  underline,
  prefix,
  suffix,
  description,
  badgeBadge,
  backgroundColor,

  status,
  focus,
  selected,
  turn,
  disabled,
  hide,
  progress,

  options,
  palette,
  listItemAppearance,
  iconSize,
  shape,
  adaptive,
  navigationRail,
  dense,
  border,
  ripple,

  optionIcon,
  thumbnail,
  icon,
  iconActive,
  iconTrailing,
  iconReadonly,
  iconAnimationShow,
  iconBackground
}
