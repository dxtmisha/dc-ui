import { badge } from '@/media/demo/badge'

export const optionsBadge = [
  'values',
  'icon',
  {
    ...badge.badge,
    value: 'value'
  },
  {
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
  },
  'dot',

  'status',
  'disabled',
  'hide',

  'options',
  'palette',
  {
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
  },
  'size',
  'shape',
  'outline',

  'optionsPosition',
  'left',
  'bottom'
]
