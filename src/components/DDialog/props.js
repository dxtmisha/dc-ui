import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-dialog')
export const props = {
  // Values
  title: String,
  text: String,

  // Status
  open: { type: Boolean },
  disabled: Boolean,

  // Options
  width: { default: defaultProps('width', null) },
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
  src: [Boolean, String],
  autoClose: { default: false },
  persistent: { default: defaultProps('persistent') },
  landscape: {
    type: Boolean,
    default: defaultProps('landscape')
  },
  dense: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  inDom: undefined,

  // Actions
  bar: Array,
  barAction: Array,
  actionsSize: { default: defaultProps('actionsSize') },
  actionsAlign: { default: defaultProps('actionsAlign') },
  actionsAxis: { default: defaultProps('actionsAxis') },
  actionsAttrs: undefined,

  // Window
  windowAttrs: undefined
}
