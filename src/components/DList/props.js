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

  // Status
  group: undefined,
  focus: undefined,
  selected: undefined,
  disabled: Boolean,

  // Options
  attrsMenu: Object,
  palette,
  color: String,
  tag: {
    type: String,
    default: 'a'
  },
  axis: {
    type: String,
    validator: validatorAxis
  },
  appearance: undefined,
  navigationRail: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  groupShow: {
    type: Boolean,
    default: defaultProps('groupShow')
  },
  dense: undefined,
  border: undefined,
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  iconReadonly: Boolean,
  iconAnimationShow: Boolean,
  iconBackground: Boolean
}
