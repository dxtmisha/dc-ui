import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'

const defaultProps = defaultInit('d-app-bar')
export const props = {
  // Values
  element: { default: defaultProps('element', window) },
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
  text: String,
  textShort: String,
  textAction: String,
  href: String,
  content: Object,

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
  width: {
    type: String,
    default: null
  },
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
  src: String,
  transform: {
    type: Number,
    default: 0
  },
  navigation: {
    type: Boolean,
    default: true
  },
  ripple: { default: defaultProps('ripple', true) },

  // Button
  menuButton: undefined,

  // List
  itemShape: { default: defaultProps('itemShape', 'tile') },
  itemAdaptive: { default: defaultProps('itemAdaptive') },
  itemAttrs: undefined,

  // Menu
  menuAjax: { default: defaultProps('menuAjax') },
  menuRequest: { default: defaultProps('menuRequest') },
  menuCache: { default: defaultProps('menuCache', true) },
  menuAppearance: { default: defaultProps('menuAppearance', 'basic') },
  menuSize: { default: defaultProps('menuSize') },
  menuShape: { default: defaultProps('menuShape') },
  menuAttrs: undefined,

  // Icon
  iconNavigation: { default: defaultProps('iconNavigation', 'menu') },
  iconClose: { default: defaultProps('iconClose', 'close') },
  iconAttrs: undefined
}
