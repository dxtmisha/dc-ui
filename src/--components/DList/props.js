import { defaultInit, validatorAxis } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-list')
export const props = {
  // Values
  list: Array,
  underline: String,
  group: Object,
  menu: Object,

  // Status
  focus: undefined,
  selected: undefined,

  // Options
  axis: {
    type: String,
    validator: validatorAxis
  },

  // Item
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  navigationRail: undefined,
  dense: undefined,
  border: undefined,
  ripple: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },
  iconArrowRight: {
    type: String,
    default: defaultProps('iconArrowRight', 'arrow_right')
  },
  iconAnimationShow: undefined,
  iconBackground: undefined
}
