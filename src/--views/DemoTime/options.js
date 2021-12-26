
import { timePickerFormat, timePickerMax, timePickerMin } from '@/views/DemoTimePicker/options'
import {
  align,
  cancel,
  disabled,
  helperMessage,
  icon,
  iconActive,
  locales,
  optionField,
  optionIcon,
  optionInput,
  palette,
  readonly,
  required,
  selected,
  shape,
  status,
  text,
  validationMessage,
  values
} from '@/media/--demo/options'

export const optionsTime = {
  values,
  value: { message: '15:39' },

  status,
  selected,
  readonly,
  disabled,

  optionInput,
  locales,
  timePickerFormat,
  timePickerMin,
  timePickerMax,
  required,

  optionField,
  text,
  helperMessage,
  validationMessage,
  palette,
  shape,
  align,
  cancel,

  optionIcon,
  icon,
  iconActive
}
