import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-navigation')
export const props = {
  // Values
  list: [Array, Object],
  listContent: Object,
  listInit: {
    type: Boolean,
    default: true
  },
  translation: {
    type: Array,
    default: defaultProps('translation')
  },
  keyText: {
    type: String,
    default: defaultProps('keyText', 'text')
  },
  keyValue: {
    type: String,
    default: defaultProps('keyValue', 'value')
  },

  // Status
  open: Boolean,
  selected: Boolean,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'contained'),
    validator: validator([
      'contained',
      'translucency'
    ])
  },
  width: {
    type: String,
    default: null
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
  adaptive: {
    type: String,
    default: defaultProps('adaptive', 'auto'),
    validator: validator([
      'auto',
      'auto-small',
      'auto-medium',
      'auto-large',
      'auto-extra',
      'auto-desktop'
    ])
  },
  navigationRail: undefined,
  src: String,
  back: {
    type: Boolean,
    default: true
  },

  // List
  listAppearance: {
    default: defaultProps('listAppearance', 'basic')
  },
  listSize: {
    default: defaultProps('listSize')
  },
  listShape: {
    default: defaultProps('listShape', 'basic')
  },
  ripple: undefined,

  // Icon
  iconChevronLeft: {
    type: String,
    default: defaultProps('iconChevronLeft', 'chevron_left')
  },
  iconBackground: undefined
}
