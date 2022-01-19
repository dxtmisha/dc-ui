import { defaultInit } from './../../uses/useDefault'

const defaultProps = defaultInit('d-card-menu')
export const props = {
  // Values
  list: undefined,
  listInit: undefined,
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
  ajax: String,
  request: Object,
  cache: Boolean,

  // Options
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Button
  buttonAppearance: { default: defaultProps('buttonAppearance', 'text') },
  buttonSize: { default: defaultProps('buttonSize', 'small') },
  buttonShape: undefined,
  buttonAttrs: undefined,

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWindowWidth: undefined,
  menuAttrs: undefined,

  // Icon
  iconMore: {
    type: String,
    default: defaultProps('iconMore', 'more_vert')
  }
}
