import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-images-bar')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  title: String,
  text: String,

  // Options
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
