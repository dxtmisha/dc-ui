import { defaultInit } from '@/uses/useDefault'

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

  // Status
  selected: Boolean,

  // Options
  size: undefined,
  shape: {
    default: defaultProps('shape', 'pill')
  },

  // Icon
  iconMore: {
    type: String,
    default: defaultProps('iconMore', 'more_vert')
  },

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: undefined
}
