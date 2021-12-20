import { defaultInit, validator, validatorShape } from '@/uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-file')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: String,
  helperMessage: String,
  validationMessage: String,
  on: {
    type: Object,
    default: {}
  },

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Input
  accept: String,
  max: Number,
  required: Boolean,
  attrsInput: Object,

  // Options
  palette,
  color: String,
  adaptive: {
    type: String,
    default: 'full',
    validator: validator([
      'full',
      'block'
    ])
  },
  size: {
    default: defaultProps('size', 'large')
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },

  // Icon
  iconFile: {
    type: String,
    default: defaultProps('iconFile', 'insert_drive_file')
  }
}
