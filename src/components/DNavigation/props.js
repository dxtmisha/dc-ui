import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-navigation')
export const props = {
  // Values
  title: String,
  list: [Array, Object],
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
  content: Object,

  // Status
  open: Boolean,
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
      'auto-desktop',
      'fixed'
    ])
  },
  navigationRail: undefined,
  src: String,
  back: {
    type: Boolean,
    default: true
  },
  close: Boolean,

  // Position
  right: Boolean,
  bottom: Boolean,

  // List
  itemAppearance: { default: defaultProps('itemAppearance', 'basic') },
  itemSize: { default: defaultProps('itemSize') },
  itemShape: { default: defaultProps('itemShape', 'basic') },
  itemRipple: { default: defaultProps('itemRipple') },
  itemMenuAttrs: { default: defaultProps('itemMenuAttrs') },
  itemAttrs: undefined,

  // Icon
  iconChevronLeft: { default: defaultProps('iconChevronLeft', 'chevron_left') },
  iconClose: { default: defaultProps('iconClose', 'close') },
  iconBackground: undefined,
  iconAttrs: undefined
}
