import { badge } from '@/media/demo/badge'

export const alignment = {
  text: 'Alignment',
  value: 'alignment',
  list: [
    { value: undefined },
    {
      text: 'Basic',
      value: 'basic'
    },
    {
      text: 'Overlap',
      value: 'overlap'
    },
    {
      text: 'Static',
      value: 'static'
    }
  ]
}

export const max = {
  text: 'Max',
  value: 'max',
  list: [
    { value: undefined },
    {
      text: '99',
      value: 99
    },
    {
      text: '999',
      value: 999
    }
  ]
}

export const value = {
  ...badge.badge,
  value: 'value'
}

export const optionsBadge = [
  'values',
  'icon',
  value,
  max,
  'dot',

  'status',
  'disabled',
  'hide',

  'options',
  'palette',
  alignment,
  'size',
  'shape',
  'outline',

  'optionsPosition',
  'left',
  'bottom'
]
