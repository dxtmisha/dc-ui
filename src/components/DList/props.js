import { defaultInit, validatorAxis } from '@/uses/useDefault'
import { palette } from '@/tool/use/useColor'

const defaultProps = defaultInit('d-list')
export const props = {
  // Values
  list: Array,
  menu: Object,

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
