import { defaultInit, validator } from '@/uses/useDefault'
import Translation from '@/classes/Translation'

const defaultProps = defaultInit('d-banner')
export const props = {
  // Values
  text: String,

  // Status
  open: {
    type: Boolean,
    default: true
  },

  // Actions
  bar: {
    type: [Array, Object],
    default: [
      {
        class: 'panel-close',
        text: Translation.get('Dismiss'),
        value: 'close'
      }
    ]
  },
  axis: undefined,

  // Options
  size: { default: defaultProps('size', 'medium') },
  width: {
    type: String,
    default: null
  },
  sticky: Boolean,

  // Icon
  icon: undefined,
  iconBackground: {
    default: defaultProps('iconBackground', 'true')
  }
}
