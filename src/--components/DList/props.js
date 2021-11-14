import { defaultInit, validatorAxis } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

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
  group: Object,
  multiple: undefined,
  maxlength: undefined,

  // Status
  focus: undefined,
  selected: undefined,

  // Options
  palette,
  color: String,
  axis: {
    type: String,
    validator: validatorAxis
  },
  groupShow: {
    type: Boolean,
    default: defaultProps('groupShow')
  },

  // Item
  tag: undefined,
  appearance: undefined,
  navigationRail: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  dense: undefined,
  border: undefined,
  ripple: undefined,

  // Icon
  iconReadonly: undefined,
  iconAnimationShow: undefined,
  iconBackground: undefined
}
