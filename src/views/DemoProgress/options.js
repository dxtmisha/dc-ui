import { bottom, delay, options, status, values, visible } from '@/media/demo/options'

export const progressValue = {
  value: 'value',
  list: [
    { value: undefined },
    {
      text: '1%',
      value: 1
    },
    {
      text: '10%',
      value: 10
    },
    {
      text: '20%',
      value: 20
    },
    {
      text: '30%',
      value: 30
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
    }
  ]
}

export const progressMax = {
  value: 'max',
  list: [
    { value: undefined },
    {
      text: '50%',
      value: 50
    },
    {
      text: '100%',
      value: 100
    },
    {
      text: '250%',
      value: 250
    },
    {
      text: '300%',
      value: 300
    }
  ]
}

export const progressType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: 'linear' },
    { value: 'circular' }
  ]
}

export const progressIndeterminate = {
  value: 'indeterminate',
  list: [
    { value: undefined },
    { value: 'type1' },
    { value: 'type2' }
  ]
}

export const optionsProgress = {
  values,
  progressValue,
  progressMax,

  status,
  visible,

  options,
  progressType,
  progressIndeterminate,
  delay,
  bottom
}
