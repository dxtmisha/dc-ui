import { defaultInit, validator, validatorShape } from '@/uses/useDefault'

const defaultProps = defaultInit('d-carcass-field')
export const props = {
  // Values
  title: String,
  text: String,
  actions: Array,
  actionsManagement: Array,
  image: [Boolean, String],

  // Status
  open: Boolean,
  disabled: Boolean,

  // Options
  axis: String,
  fullscreen: Boolean,
  width: {
    type: String,
    default: defaultData('width', null)
  },
  persistent: {
    type: Boolean,
    default: defaultData('persistent')
  },
  landscape: {
    type: Boolean,
    default: defaultData('landscape')
  },
  dense: Boolean,
  attrsActions: Object,
  attrsWindow: Object
}
