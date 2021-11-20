import { defaultInit, validatorAxis } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-list')
export const props = {
  // Values
  list: Array,
  group: Object,
  menu: Object,

  // Status
  focus: undefined,
  selected: undefined,
  underline: undefined,

  // Options
  palette,
  color: String,
  axis: {
    type: String,
    validator: validatorAxis
  },
  navigationRail: undefined,

  // Item
  tag: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
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
