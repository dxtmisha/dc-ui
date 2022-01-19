import { defaultInit, validatorShape } from '../../uses/useDefault'

const defaultProps = defaultInit('d-avatar')
export const props = {
  // Values
  name: String,
  value: Object,
  maxZoom: {
    type: Number,
    default: defaultProps('maxZoom', 500)
  },

  // Status
  readonly: Boolean,
  disabled: Boolean,

  // Options
  width: {
    type: String,
    default: defaultProps('width', null)
  },
  height: {
    type: String,
    default: defaultProps('height', null)
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },

  // Icon
  iconImage: { default: defaultProps('iconImage', 'image') }
}
