export const delay = {
  text: 'Delay',
  value: 'delay',
  list: [
    {
      text: '',
      value: undefined
    },
    {
      text: '0ms',
      value: 0
    },
    {
      text: '200ms',
      value: 200
    },
    {
      text: '400ms',
      value: 400
    },
    {
      text: '800ms',
      value: 800
    },
    {
      text: '1200ms',
      value: 1200
    }
  ]
}

export const indeterminate = {
  text: 'Indeterminate indicators',
  value: 'indeterminate',
  list: [
    {
      text: '',
      value: undefined
    },
    {
      text: 'Type 1',
      value: 'type1'
    },
    {
      text: 'Type 2',
      value: 'type2'
    }
  ]
}

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
  indeterminate,
  delay,
  'bottom'
]
