import {
  disabled,
  helperMessage,
  optionInput,
  options,
  palette,
  required,
  right,
  ripple,
  status,
  text,
  validationMessage,
  values
} from '@/media/--demo/options'

export const checkboxType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: 'checkbox' },
    { value: 'radio' },
    { value: 'switch' }
  ]
}

export const optionsCheckbox = {
  values,
  text,
  helperMessage,
  validationMessage,

  status,
  disabled,

  options,
  palette,
  right,
  ripple,

  optionInput,
  checkboxType,
  required
}
