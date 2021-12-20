// import { iconSize } from '@/views/DemoIcon/options'
import { listItemAppearance } from '@/--views/DemoListItem/options'
// import { windowWidth } from '@/views/DemoWindow/options'
import {
  ajax,
  cache,
  optionMenu,
  options,
  shape,
  size,
  values
} from '@/media/--demo/options'

export const optionsCardMenu = {
  values,
  ajax,
  cache,

  options,
  size,
  shape,

  optionMenu,
  menuAppearance: { list: listItemAppearance.list },
  // menuSize: { list: iconSize.list },
  menuShape: { list: shape.list }
  // menuWidth: { list: windowWidth.list }
}
