export const type = {
  text: 'Type',
  value: 'type',
  list: [
    {
      text: '',
      value: undefined
    },
    {
      text: 'Linear',
      value: 'linear'
    },
    {
      text: 'Circular',
      value: 'circular'
    }
  ]
}

export const value = {
  text: 'Value',
  value: 'value',
  list: [
    {
      text: '',
      value: undefined
    },
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
    }
  ]
}

export const optionsProgress = [
  'values',
  value,

  'status',
  'visible',

  'options',
  type,
  'indeterminate',
  'delay',
  'bottom'
]
