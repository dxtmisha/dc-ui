import { palette } from '@/uses/useColor'
import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'

const defaultProps = defaultInit('d-app-bar')
export const props = {
  // Values
  text: String,
  textAction: String,
  textShort: String,

  // Actions
  bar: Array,
  barMenu: Array,
  barAction: Array,
  barInit: {
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
  action: Boolean,
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
  scroll: {
    type: String,
    default: defaultProps('scroll', 'top'),
    validator: validator([
      'top',
      'disappears',
      'elevation',
      'border'
    ])
  },
  width: {
    type: String,
    default: null
  },
  transform: Number,
  src: String,
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  attrsList: Object,

  // Icon
  iconNavigation: {
    type: String,
    default: defaultProps('iconNavigation', 'menu')
  },
  iconClose: {
    type: String,
    default: defaultProps('iconClose', 'close')
  }
}
