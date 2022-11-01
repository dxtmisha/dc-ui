import { defaultInit, validator } from '../../uses/useDefault'

const defaultProps = defaultInit('d-card')
export const props = {
  // Values
  title: undefined,
  description: undefined,
  menu: undefined,
  href: String,
  backgroundColor: {
    type: String,
    default: null
  },
  bar: {
    type: Array,
    default: []
  },
  barAction: undefined,

  // Status
  active: Boolean,
  dragged: Boolean,
  hide: Boolean,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'auto'),
    validator: validator([
      'auto',
      'auto-small',
      'auto-medium',
      'auto-large',
      'auto-extra',
      'auto-desktop',
      'basic',
      'outlined'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
  },
  aspectRatio: { default: defaultProps('aspectRatio') },
  landscape: {
    type: Boolean,
    default: defaultProps('landscape')
  },

  // Position
  right: {
    type: Boolean,
    default: defaultProps('right')
  },

  // Actions
  actionsSize: { default: defaultProps('actionsSize') },
  actionsAlign: { default: defaultProps('actionsAlign', 'left') },
  actionsButtonAppearance: { default: defaultProps('actionsButtonAppearance') },
  actionsAttrs: undefined,

  // Media
  mediaCoordinator: undefined,
  mediaZoom: undefined,
  mediaX: undefined,
  mediaY: undefined,
  mediaAttrs: undefined,

  // Text
  text: undefined,
  textTitle: undefined,

  // Title
  titleAttrs: undefined,

  // Icon
  thumbnail: undefined,
  icon: undefined,
  iconActive: undefined,
  iconBackground: undefined
}
