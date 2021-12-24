import { defaultInit } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-select-value')
export const props = {
  // Values
  value: undefined,
  multiple: Boolean,

  // Status
  disabled: Boolean,

  // Options
  palette: palette,
  color: String,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },

  // Button
  buttonTag: undefined,
  buttonAppearance: { default: defaultProps('buttonAppearance', 'chip') },
  buttonSize: { default: defaultProps('buttonSize', 'small') },
  buttonShape: { default: defaultProps('buttonShape', 'pill') },
  buttonAttrs: undefined,

  // Icon
  iconCancel: { default: defaultProps('iconCancel', 'cancel') }
}
