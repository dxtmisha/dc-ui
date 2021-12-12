import {
  locales,
  options,
  status,
  values
} from '@/media/demo/options'

export const timePickerValue = {
  value: 'value',
  list: [
    { value: undefined },
    { value: '08:05' },
    { value: '16:33' },
    { value: '2020-08-19 05:04' },
    { value: '99:99' }
  ]
}

export const timePickerMin = {
  value: 'min',
  message: '10:00'
}

export const timePickerMax = {
  value: 'max',
  message: '19:00'
}

export const timePickerSwitchClock = {
  value: 'switchClock',
  default: true
}

export const timePickerFormat = {
  value: 'format',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: '12' },
    { value: '24' }
  ]
}

export const optionsTimePicker = {
  values,
  timePickerValue,
  timePickerMin,
  timePickerMax,

  status,
  timePickerSwitchClock,

  options,
  locales,
  timePickerFormat
}
