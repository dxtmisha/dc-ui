// import { calendarAdaptive, calendarMax, calendarMin } from '@/views/DemoCalendar/options'
// import { datePickerValue } from '@/views/DemoDatePicker/options'
import {
  align,
  cancel,
  disabled,
  helperMessage,
  icon,
  iconActive,
  locales,
  multiple,
  optionField,
  optionIcon,
  optionInput,
  optionPicker,
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

export const optionsDate = {
  values,
  // datePickerValue,

  status,
  selected,
  readonly,
  disabled,

  optionInput,
  multiple,
  locales,
  // calendarMin,
  // calendarMax,
  required,

  optionField,
  text,
  helperMessage,
  validationMessage,
  palette,
  shape,
  align,
  cancel,

  optionPicker,
  pickerShape: shape,
  pickerAdaptive: {
    // ...calendarAdaptive,
    value: 'pickerAdaptive'
  },

  optionIcon,
  icon,
  iconActive
}
