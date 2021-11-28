import { optionsButtonAppearance } from '@/views/DemoButton/options'
import { optionsListItemAppearance, optionsListItemSize } from '@/views/DemoListItem/options'
import { optionsWindowWidth } from '@/views/DemoWindow/options'
import { optionsList } from '@/media/--demo/options'

export const optionsButtonSelect = [
  'values',
  'icon',
  'iconActive',
  'text',

  'status',
  'selected',
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

  'optionsButton',
  'palette',
  optionsButtonAppearance,
  'size',
  'shape',
  'align',
  'adaptive',
  'lowercase',
  'dense',
  'ripple',

  'optionsIcon',
  'iconBackground'
]
