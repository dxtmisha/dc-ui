import { defaultInit } from './../../uses/useDefault'

const defaultProps = defaultInit('d-images-item')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  title: undefined,
  text: undefined,
  src: [Object, String],
  coordinator: undefined,
  zoom: undefined,
  x: undefined,
  y: undefined,

  // Status
  selected: Boolean,

  // Options
  emphasize: Number,

  // Icon
  iconCheck: { default: defaultProps('iconCheck', 'check_circle') }
}
