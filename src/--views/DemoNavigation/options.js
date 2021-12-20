import { appBarAppearance, appBarSrc } from '@/--views/DemoAppBar/options'
// import { iconSize } from '@/views/DemoIcon/options'
import { listItemAppearance } from '@/--views/DemoListItem/options'
// import { windowShape, windowWidth } from '@/views/DemoWindow/options'
import {
  buttonBack,
  buttonClose,
  iconBackground,
  navigationRail,
  optionIcon,
  optionList,
  options, right,
  ripple,
  shape,
  title,
  values
} from '@/media/--demo/options'

export const navigationAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' },
    { value: 'fixed' }
  ]
}

export const optionsNavigation = {
  values,
  title,

  options,
  appBarAppearance,
  // windowWidth,
  // windowShape,
  navigationAdaptive,
  navigationRail,
  appBarSrc,
  right,
  buttonBack,
  buttonClose,

  optionList,
  listAppearance: {
    ...listItemAppearance,
    value: 'listAppearance'
  },
  listSize: {
    // ...iconSize,
    value: 'listSize'
  },
  listShape: shape,
  ripple,

  optionIcon,
  iconBackground
}
