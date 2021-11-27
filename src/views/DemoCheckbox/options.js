export const optionsCheckboxType = {
  text: 'Type',
  value: 'type',
  list: [
    { value: undefined },
    {
      text: 'checkbox',
      value: 'checkbox'
    },
    {
      text: 'radio',
      value: 'radio'
    },
    {
      text: 'switch',
      value: 'switch'
    }
  ]
}

export const optionsCheckbox = [
  'values',
  'text',
  'helperMessage',
  'validationMessage',

  'status',
  'disabled',

  'options',
  'palette',
  'right',
  'ripple',

  'optionsInput',
  optionsCheckboxType,
  'required'
]
