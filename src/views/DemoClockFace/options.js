import {
  options,
  shape,
  values
} from '@/media/demo/options'

export const clockFaceHour = {
  value: 'hour',
  message: 15
}

export const clockFaceMinute = {
  value: 'minute',
  message: 35
}

export const clockFaceSecond = {
  value: 'second',
  message: 45
}

export const clockFaceSelect = {
  value: 'select',
  list: [
    { value: undefined },
    { value: 0 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 30 },
    { value: 31 },
    { value: 32 },
    { value: 33 },
    { value: 58 },
    { value: 59 },
    { value: 60 }
  ]
}

export const clockFaceMin = {
  value: 'min',
  message: 6
}

export const clockFaceMax = {
  value: 'max',
  message: 18
}

export const clockFaceType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: '12' },
    { value: '24' },
    { value: 'minute' },
    { value: 'second' }
  ]
}

export const optionsClockFace = {
  values,
  clockFaceHour,
  clockFaceMinute,
  clockFaceSecond,
  clockFaceSelect,
  clockFaceMin,
  clockFaceMax,

  options,
  clockFaceType,
  shape
}
