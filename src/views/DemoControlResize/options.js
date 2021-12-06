import {
  disabled,
  disabledBottom,
  disabledLeft,
  disabledRight,
  disabledTop,
  status,
  values
} from '@/media/demo/options'

export const controlValue = {
  value: 'value',
  list: [
    { value: undefined },
    { value: [25, 25, 25, 25] },
    { value: [10, 10, 10, 10] },
    { value: [10, 20, 30, 40] },
    { value: [20, 30, 20, 30] }
  ]
}

export const optionsControlResize = {
  values,
  controlValue,

  status,
  disabled,
  disabledTop,
  disabledRight,
  disabledBottom,
  disabledLeft
}
