import { locales, mask, options, values, visibleMask } from '@/media/demo/options'

export const maskValue = {
  value: 'value',
  list: [
    { value: undefined },
    { value: '1234 5678' },
    { value: '+7 (902) 334-33-33' },
    { value: '1987-09-21' },
    { value: '1996-12-30 20:30' },
    { value: '1996-12-35 20:30' },
    { value: '2000-01' },
    { value: '21:45' }
  ]
}

export const maskType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: 'text' },
    { value: 'date' },
    { value: 'datetime' },
    { value: 'month' },
    { value: 'time' }
  ]
}

export const optionsMask = {
  values,
  mask,
  maskValue,

  options,
  maskType,
  locales,
  visibleMask
}
