import { defaultInit, validator, validatorSize } from '@/uses/useDefault'

const defaultProps = defaultInit('d-images-bar')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  title: String,
  text: String,

  // Status
  selected: Boolean,

  // Options
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  display: {
    type: String,
    default: defaultProps('display', 'below'),
    validator: validator([
      'below',
      'above'
    ])
  },
  buttonAttrs: undefined,

  // Icon
  icon: String
}
