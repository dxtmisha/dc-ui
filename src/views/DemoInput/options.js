import {
  optionsCarcassFieldAdaptive,
  optionsCarcassFieldAppearance,
  optionsCarcassFieldSize
} from '@/views/DemoCarcassField/options'

export const optionsInputType = {
  text: 'Type',
  value: 'type',
  list: [
    { value: undefined },
    {
      text: 'date',
      value: 'date'
    },
    {
      text: 'datetime',
      value: 'datetime'
    },
    {
      text: 'email',
      value: 'email'
    },
    {
      text: 'month',
      value: 'month'
    },
    {
      text: 'number',
      value: 'number'
    },
    {
      text: 'password',
      value: 'password'
    },
    {
      text: 'search',
      value: 'search'
    },
    {
      text: 'tel',
      value: 'tel'
    },
    {
      text: 'text',
      value: 'text'
    },
    {
      text: 'time',
      value: 'time'
    },
    {
      text: 'url',
      value: 'url'
    }
  ]
}

export const optionsInput = [
  'values',
  'icon',
  'iconActive',
  'iconTrailing',
  'value',
  'text',
  'prefix',
  'suffix',
  'helperMessage',
  'validationMessage',
  'maxlength',
  'required',

  'status',
  'selected',
  'readonly',
  'disabled',

  'optionsInput',
  optionsInputType,
  'step',
  'min',
  'max',
  'minlength',
  'maxlength',
  'pattern',
  'placeholder',

  'optionsMask',
  'locales',
  'visibleMask',

  'optionsField',
  'palette',
  'arrow',
  optionsCarcassFieldAppearance,
  optionsCarcassFieldSize,
  'shape',
  'align',
  optionsCarcassFieldAdaptive,
  'counter',
  'cancel',
  'ripple'
]
