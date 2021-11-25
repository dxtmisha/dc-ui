export const optionsMaskType = {
  text: 'Type',
  value: 'type',
  list: [
    { value: undefined },
    {
      text: 'text',
      value: 'text'
    },
    {
      text: 'date',
      value: 'date'
    },
    {
      text: 'datetime',
      value: 'datetime'
    },
    {
      text: 'month',
      value: 'month'
    },
    {
      text: 'time',
      value: 'time'
    }
  ]
}

export const optionsMask = [
  'values',
  'mask',
  {
    text: 'Value',
    value: 'value',
    message: '1234567890'
  },
  {
    text: 'Match',
    value: 'match',
    list: [
      { value: undefined },
      {
        text: '0-9',
        value: /[0-9]/
      },
      {
        text: 'a-Z, 0-9',
        value: /[a-zA-Z0-9]/
      }
    ]
  },
  optionsMaskType,
  'locales',
  'visibleMask'
]
