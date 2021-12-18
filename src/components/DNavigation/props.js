import { defaultInit, validator } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

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
  palette,
  color: String,
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
  navigationRail: undefined,
  back: {
    type: Boolean,
    default: true
  },

  // List
  listAppearance: {
    default: defaultProps('listAppearance')
  },
  listSize: {
    default: defaultProps('listSize')
  },
  listShape: {
    default: defaultProps('listShape')
  },
  ripple: undefined,

  // Icon
  iconChevronLeft: {
    type: String,
    default: defaultProps('iconChevronLeft', 'chevron_left')
  },
  iconBackground: undefined
}
