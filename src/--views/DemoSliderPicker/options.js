import {
  disabled,
  magnet,
  marks,
  minimumDistance,
  multiple,
  optionInput,
  options,
  palette,
  ripple,
  status,
  step,
  values,
  vertical
} from '@/media/--demo/options'

export const sliderPickerValue = {
  value: 'value',
  list: [
    { value: undefined },
    {
      text: '10%',
      value: 10
    },
    {
      text: '50%',
      value: 50
    },
    {
      text: '90%',
      value: 90
    },
    {
      text: '99%',
      value: 99
    },
    {
      text: '100%',
      value: 100
    },
    {
      text: '200%',
      value: 200
    },
    {
      text: '20% - 80%',
      value: [20, 80]
    },
    {
      text: '0% - 100%',
      value: [0, 100]
    }
  ]
}

export const sliderPickerAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'drop' }
  ]
}

export const optionsSliderPicker = {
  values,
  marks,
  sliderPickerValue,

  status,
  disabled,

  optionInput,
  multiple,
  minimumDistance,
  step,

  options,
  palette,
  sliderPickerAppearance,
  vertical,
  magnet,
  ripple
}
