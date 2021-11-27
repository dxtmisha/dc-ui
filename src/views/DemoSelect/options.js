import {
  optionsCarcassFieldAdaptive,
  optionsCarcassFieldAppearance,
  optionsCarcassFieldSize
} from '@/views/DemoCarcassField/options'
import { optionsListItemAppearance, optionsListItemSize } from '@/views/DemoListItem/options'
import { optionsWindowWidth } from '@/views/DemoWindow/options'
import { optionsList } from '@/media/demo/options'

export const optionsSelectType = {
  text: 'Type',
  value: 'type',
  list: [
    { value: undefined },
    {
      text: 'select',
      value: 'select'
    },
    {
      text: 'month',
      value: 'month'
    },
    {
      text: 'week',
      value: 'week'
    }
  ]
}

export const optionsSelect = [
  'values',
  'icon',
  'iconActive',
  'value',
  'text',
  'helperMessage',
  'validationMessage',
  'required',

  'status',
  'selected',
  'readonly',
  'disabled',

  'optionsInput',
  optionsSelectType,
  'ajax',
  'cache',
  'multiple',
  'maxlength',
  'locales',

  'optionsMenu',
  {
    ...optionsListItemAppearance,
    value: 'menuAppearance'
  },
  {
    ...optionsListItemSize,
    value: 'menuSize'
  },
  {
    ...optionsList.shape,
    value: 'menuShape'
  },
  {
    ...optionsWindowWidth,
    value: 'menuWidth'
  },

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
