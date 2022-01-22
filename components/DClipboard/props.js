import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-clipboard')
export const props = {
  // Values
  value: String,

  // Icon
  iconCopy: { default: defaultProps('iconCopy', 'content_copy') }
}
