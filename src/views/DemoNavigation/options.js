import { appBarSrc } from '@/views/DemoAppBar/options'
import { iconSize } from '@/views/DemoIcon/options'
import { listItemAppearance } from '@/views/DemoListItem/options'
import { windowShape, windowWidth } from '@/views/DemoWindow/options'
import {
  back,
  iconBackground,
  navigationRail,
  optionIcon,
  optionList,
  options,
  ripple,
  shape
} from '@/media/demo/options'

export const navigationAppearance = {
  value: 'appearance',
  list: [
    { value: undefined },
    { value: 'contained' },
    { value: 'translucency' }
  ]
}

export const navigationAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' }
  ]
}

export const optionsNavigation = {
  options,
  navigationAppearance,
  windowWidth,
  windowShape,
  navigationAdaptive,
  navigationRail,
  appBarSrc,
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
