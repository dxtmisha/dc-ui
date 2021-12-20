import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-dialog')
export const props = {
  // Values
  title: String,
  text: String,
  image: [Boolean, String],

  // Status
  open: Boolean,
  disabled: Boolean,

  // Actions
  actions: Array,
  actionsManagement: Array,
  axis: undefined,
  attrsActions: Object,

  // Options
  landscape: {
    type: Boolean,
    default: defaultProps('landscape')
  },
  dense: Boolean,
  border: {
    type: Boolean,
    default: true
  },

  // Window
  width: {
    type: String,
    default: defaultProps('width', null)
  },
  size: undefined,
  shape: undefined,
  adaptive: {
    default: defaultProps('adaptive', 'modal'),
    validator: validator([
      'modal',
      'modal-left',
      'modal-right'
    ])
  },
  autoClose: {
    default: false
  },
  persistent: {
    type: Boolean,
    default: defaultProps('persistent')
  },
  attrsWindow: Object
}
