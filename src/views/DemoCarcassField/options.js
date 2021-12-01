import {
  align,
  arrow,
  cancel,
  counter,
  disabled,
  disabledNext,
  disabledPrevious,
  focus,
  helperMessage,
  icon,
  iconActive,
  iconTrailing,
  maxlength,
  options,
  optionIcon,
  palette,
  prefix,
  progress,
  readonly,
  required,
  ripple,
  selected,
  shape,
  status,
  suffix,
  text,
  turn,
  validationMessage,
  values
} from '@/media/demo/options'

export const carcassFieldCounterValue = {
  value: 'counterValue',
  message: 2
}

export const carcassFieldAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'classic' },
    { value: 'filled' },
    { value: 'outlined' }
  ]
}

export const carcassFieldSize = {
  value: 'size',
  list: [
    { value: undefined },
    { value: 'dense' },
    { value: 'small' },
    { value: 'medium' },
    { value: 'large' },
    { value: 'interactive-display' }
  ]
}

export const carcassFieldAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'block' }
  ]
}

export const optionsCarcassField = {
  values,
  text,
  prefix,
  suffix,
  helperMessage,
  validationMessage,
  carcassFieldCounterValue,
  maxlength,
  required,

  status,
  focus,
  selected,
  turn,
  readonly,
  disabled,
  disabledPrevious,
  disabledNext,
  progress,

  options,
  palette,
  carcassFieldAppearance,
  carcassFieldSize,
  shape,
  align,
  carcassFieldAdaptive,
  arrow,
  counter,
  cancel,
  ripple,

  optionIcon,
  icon,
  iconActive,
  iconTrailing
}
