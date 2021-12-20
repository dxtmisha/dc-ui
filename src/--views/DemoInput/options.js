import {
  carcassFieldAdaptive,
  carcassFieldAppearance,
  carcassFieldSize
} from '@/--views/DemoCarcassField/options'
import { maskValue } from '@/--views/DemoMask/options'
import {
  align, arrow, cancel, counter,
  disabled,
  helperMessage,
  icon,
  iconActive,
  iconTrailing,
  locales,
  mask,
  max,
  maxlength,
  min,
  minlength,
  optionField,
  optionIcon,
  optionInput,
  optionMask,
  palette,
  pattern,
  placeholder,
  prefix,
  readonly,
  required,
  selected,
  shape,
  status,
  step,
  suffix,
  text,
  validationMessage,
  values,
  visibleMask
} from '@/media/--demo/options'

export const inputType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: 'date' },
    { value: 'datetime' },
    { value: 'email' },
    { value: 'month' },
    { value: 'number' },
    { value: 'password' },
    { value: 'search' },
    { value: 'tel' },
    { value: 'text' },
    { value: 'time' },
    { value: 'url' }
  ]
}

export const optionsInput = {
  values,
  maskValue,

  status,
  selected,
  readonly,
  disabled,

  optionInput,
  inputType,
  step,
  min,
  max,
  minlength,
  maxlength,
  pattern,
  placeholder,
  required,

  optionMask,
  mask: {
    ...mask,
    default: undefined
  },
  locales,
  visibleMask,

  optionField,
  text,
  prefix,
  suffix,
  helperMessage,
  validationMessage,
  palette,
  carcassFieldAppearance,
  carcassFieldSize,
  shape,
  align,
  carcassFieldAdaptive,
  arrow,
  counter,
  cancel,

  optionIcon,
  icon,
  iconActive,
  iconTrailing
}
