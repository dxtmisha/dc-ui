import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-anchor-to')
export const props = {
  // Values
  name: String,
  text: String,
  altKey: {
    type: Boolean,
    default: defaultProps('tooltipHideAfter', true)
  },

  // Tooltip
  tooltipHideAfter: {
    type: Number,
    default: defaultProps('tooltipHideAfter', 2000)
  }
}
