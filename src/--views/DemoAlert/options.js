import { iconSize } from '@/--views/DemoIcon/options'
import {
  hide,
  icon,
  options,
  palette,
  status,
  values,
  text,
  description,
  animationShow,
  optionIcon,
  iconBackground,
  dense,
  cancel, shape
} from '@/media/--demo/options'

export const alertAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'prominent' },
    { value: 'outlined' },
    { value: 'outlined-prominent' },
    { value: 'filled' },
    { value: 'contained' },
    { value: 'shadow' }
  ]
}

export const alertBorder = {
  value: 'border',
  list: [
    { value: undefined },
    { value: 'top' },
    { value: 'right' },
    { value: 'bottom' },
    { value: 'left' }
  ]
}

export const optionsAlert = {
  values,
  text: {
    ...text,
    default: false
  },
  description: {
    ...description,
    default: true
  },

  status,
  hide,

  options,
  palette,
  alertAppearance,
  iconSize,
  shape,
  alertBorder,
  dense,
  animationShow,
  cancel,

  optionIcon,
  icon,
  iconBackground
}
