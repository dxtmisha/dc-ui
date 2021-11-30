import { iconSize } from '@/views/DemoIcon/options'
import { listItemAppearance } from '@/views/DemoListItem/options'
import { windowAxis, windowIndent, windowWidth } from '@/views/DemoWindow/options'
import {
  ajax,
  cache,
  disabled,
  maxlength,
  multiple,
  optionsItem,
  optionsWindow,
  palette,
  ripple,
  shape,
  status,
  values
} from '@/media/demo/options'

export const optionsMenu = {
  values,
  ajax,
  cache,
  multiple,
  maxlength,

  status,
  selected: { message: 'profile' },
  disabled,

  optionsItem,
  palette,
  listItemAppearance,
  iconSize,
  shape,
  ripple,

  optionsWindow,
  windowWidth,
  windowAxis,
  windowIndent
}
