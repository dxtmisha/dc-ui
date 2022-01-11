import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-images-item')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  src: [Object, String],
  title: undefined,
  text: undefined,

  // Status
  selected: Boolean,

  // Options
  emphasize: Number,

  // Icon
  iconCheck: { default: defaultProps('iconCheck', 'check_circle') }
}
