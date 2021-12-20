import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'

const defaultProps = defaultInit('d-app-bar')
export const props = {
  // Values
  text: String,
  textAction: String,
  textShort: String,
  href: String,
  element: {
    type: undefined,
    default: defaultProps('element', window)
  },
  navigation: {
    type: Boolean,
    default: true
  },

  // Actions
  bar: Array,
  barMenu: Array,
  barNavigation: Array,
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
  listContent: Object,

  // Status
  open: Boolean,
  action: Boolean,
  selected: Boolean,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'contained'),
    validator: validator([
      'contained',
      'translucency',
      'transparent'
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
  transform: {
    type: Number,
    default: 0
  },
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
  attrsMenu: Object,

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
