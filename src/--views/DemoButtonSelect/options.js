// import { buttonAppearance } from '@/views/DemoButton/options'
// import { iconSize } from '@/views/DemoIcon/options'
// import { listItemAppearance } from '@/views/DemoListItem/options'
import { selectType } from '@/--views/DemoSelect/options'
// import { windowWidth } from '@/views/DemoWindow/options'
import {
  adaptive,
  ajax,
  align,
  cache,
  dense,
  disabled,
  icon,
  iconActive,
  iconBackground,
  locales,
  lowercase,
  maxlength,
  multiple,
  optionButton,
  optionIcon,
  optionList,
  optionMenu,
  optionSelect,
  palette,
  selected,
  shape,
  size,
  status,
  text,
  values
} from '@/media/--demo/options'

export const optionsButtonSelect = {
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

  optionButton,
  text,
  palette,
  // buttonAppearance,
  size,
  shape,
  align,
  adaptive,
  lowercase,
  dense,

  optionIcon,
  icon,
  iconActive,
  iconBackground,

  optionMenu,
  // menuAppearance: { list: listItemAppearance.list },
  // menuSize: { list: iconSize.list },
  menuShape: { list: shape.list }
  // menuWidth: { list: windowWidth.list }
}
