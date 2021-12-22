
// import { iconSize } from '@/views/DemoIcon/options'
// import { listItemAppearance } from '@/views/DemoListItem/options'
// import { windowWidth } from '@/views/DemoWindow/options'
import {
  ajax,
  align,
  arrow,
  cache,
  cancel,
  counter,
  disabled,
  helperMessage,
  icon,
  iconActive,
  locales,
  maxlength,
  multiple,
  optionField,
  optionIcon,
  optionList,
  optionMenu,
  optionSelect,
  palette,
  required,
  selected,
  shape,
  status,
  text,
  validationMessage,
  values
} from '@/media/--demo/options'

export const selectType = {
  value: 'type',
  list: [
    { value: undefined },
    { value: 'select' },
    { value: 'month' },
    { value: 'week' }
  ]
}

export const optionsSelect = {
  values,
  value: { message: 'profile' },

  status,
  selected,
  disabled,

  optionList,
  ajax,
  cache,
  multiple,

  optionSelect,
  selectType,
  locales,
  maxlength,
  required,

  optionField,
  text,
  helperMessage,
  validationMessage,
  palette,
  // carcassFieldAppearance,
  // carcassFieldSize,
  shape,
  align,
  // carcassFieldAdaptive,
  arrow,
  counter,
  cancel,

  optionIcon,
  icon,
  iconActive,

  optionMenu,
  // menuAppearance: { list: listItemAppearance.list },
  // menuSize: { list: iconSize.list },
  menuShape: { list: shape.list }
  // menuWidth: { list: windowWidth.list }
}
