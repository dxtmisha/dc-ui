import { palette } from '@/uses/useColor'
import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-skeleton')
export const props = {
  // Values
  itemBackground: String,
  itemText: String,

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
  }
}
