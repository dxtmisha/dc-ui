import { defaultInit, validatorAxis } from '@/uses/useDefault'

const defaultProps = defaultInit('d-list')
export const props = {
  // Values
  list: Array,
  underline: String,
  group: Object,

  // Status
  focus: undefined,
  selected: undefined,

  // Options
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  navigationRail: undefined,
  axis: {
    type: String,
    validator: validatorAxis
  },
  dense: undefined,
  border: undefined,
  ripple: undefined,

  // Menu
  menuAttrs: undefined,

  // Icon
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') },
  iconArrowRight: { default: defaultProps('iconArrowRight', 'arrow_right') },
  iconAnimationShow: undefined,
  iconBackground: undefined,
  iconAttrs: undefined
}
