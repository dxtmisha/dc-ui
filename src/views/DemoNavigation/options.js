import { iconSize } from '@/views/DemoIcon/options'
import { listItemAppearance } from '@/views/DemoListItem/options'
import { windowShape, windowWidth } from '@/views/DemoWindow/options'
import {
  back,
  iconBackground,
  navigationRail,
  open,
  optionIcon,
  optionList,
  options,
  palette,
  ripple,
  shape,
  status
} from '@/media/demo/options'

export const navigationAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'contained' },
    { value: 'translucency' }
  ]
}

export const optionsNavigation = {
  status,
  open,

  options,
  palette,
  navigationAppearance,
  windowWidth,
  windowShape,
  navigationRail,
  back,

  optionList,
  listAppearance: {
    ...listItemAppearance,
    value: 'listAppearance'
  },
  listSize: {
    ...iconSize,
    value: 'listSize'
  },
  listShape: shape,
  ripple,

  optionIcon,
  iconBackground
}
