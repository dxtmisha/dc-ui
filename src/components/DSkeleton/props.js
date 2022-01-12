import { palette } from '@/uses/useColor'
import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-skeleton')
export const props = {
  // Values
  itemText: String,
  itemSecondary: String,
  itemTertiary: String,
  itemBackground: String,
  itemBorder: String,

  // Status
  progress: Boolean,

  // Options
  palette,
  color: String,
  tag: {
    type: String,
    default: 'div'
  },
  appearance: {
    type: String,
    default: defaultProps('appearance'),
    validator: validator([
      'basic',
      'wave'
    ])
  },
  delay: {
    type: Number,
    default: defaultProps('delay', 400)
  }
}
