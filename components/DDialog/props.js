import { defaultInit, validator } from '../../uses/useDefault'

const defaultProps = defaultInit('d-dialog')
export const props = {
  // Values
  title: String,
  text: String,

  // Status
  open: Boolean,
  disabled: Boolean,

  // Options
  src: [Boolean, String],
  landscape: {
    type: Boolean,
    default: defaultProps('landscape')
  },
  dense: Boolean,
  border: {
    type: Boolean,
    default: defaultProps('border', true)
  },

  // Actions
  bar: Array,
  barAction: Array,
  actionsSize: { default: defaultProps('actionsSize') },
  actionsAlign: { default: defaultProps('actionsAlign') },
  actionsAxis: { default: defaultProps('actionsAxis') },
  actionsAttrs: undefined,

  // Window
  windowWidth: { default: defaultProps('windowWidth', null) },
  windowSize: { default: defaultProps('windowSize') },
  windowShape: { default: defaultProps('windowShape') },
  windowAdaptive: {
    default: defaultProps('windowAdaptive', 'modal'),
    validator: validator([
      'modal',
      'modal-left',
      'modal-right'
    ])
  },
  windowAutoClose: { default: defaultProps('windowAutoClose', false) },
  windowPersistent: { default: defaultProps('windowPersistent') },
  windowInDom: { default: defaultProps('windowInDom') },
  windowAttrs: undefined
}
