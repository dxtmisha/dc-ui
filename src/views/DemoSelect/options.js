import {
  optionsCarcassFieldAdaptive,
  optionsCarcassFieldAppearance,
  optionsCarcassFieldSize
} from '@/views/DemoCarcassField/options'
import { optionsListItemAppearance, optionsListItemSize } from '@/views/DemoListItem/options'
import { optionsList } from '@/media/demo/options'
import { optionsWindowWidth } from '@/views/DemoWindow/options'

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
  'ajax',
  'cache',
  'multiple',
  'maxlength',

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
