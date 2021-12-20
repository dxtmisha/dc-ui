import {
  adaptive,
  axis,
  dense,
  disabled,
  landscape,
  lowercase,
  maxlength,
  multiple,
  optionButton,
  options,
  palette,
  readonly,
  ripple,
  shape,
  size,
  status,
  values
} from '@/media/--demo/options'
// import { buttonAppearance } from '@/--views/DemoButton/options'

export const optionsActions = {
  values,
  multiple,
  maxlength,

  status,
  readonly,
  disabled,

  options,
  axis,
  landscape,

  optionButton,
  palette,
  // buttonAppearance,
  size,
  shape,
  adaptive,
  lowercase: {
    ...lowercase,
    default: true
  },
  dense,
  ripple
}
