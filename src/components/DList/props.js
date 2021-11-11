import { defaultInit, validatorAxis } from '@/uses/useDefault'

const defaultProps = defaultInit('d-list')
export const props = {
  // Values
  list: Array,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },
  iconArrowRight: {
    type: String,
    default: defaultProps('iconArrowRight', 'arrow_right')
  },

  // Status
  focus: undefined,
  selected: undefined,
  group: undefined,

  // Options
  axis: {
    type: String,
    validator: validatorAxis
  },
  width: {
    type: String,
    default: defaultProps('width')
  },
  groupShow: {
    type: Boolean,
    default: defaultProps('groupShow')
  },
  attrsMenu: Object
}
