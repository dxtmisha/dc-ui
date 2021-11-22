export const optionsMaskType = {
  text: 'Type',
  value: 'type',
  list: [
    { value: undefined },
    {
      text: 'Text',
      value: 'text'
    },
    {
      text: 'Date',
      value: 'date'
    },
    {
      text: 'Datetime',
      value: 'datetime'
    },
    {
      text: 'Month',
      value: 'month'
    },
    {
      text: 'Time',
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
  'locales'
]
