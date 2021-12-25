import { defaultInit } from '@/uses/useDefault'
import Translation from '@/classes/Translation'

const defaultProps = defaultInit('d-banner')
export const props = {
  // Values
  bar: {
    type: [Array, Object],
    default: defaultProps('bar', [
      {
        class: 'panel-close',
        text: Translation.get('Dismiss'),
        value: 'close'
      }
    ])
  },
  text: String,

  // Status
  open: {
    type: Boolean,
    default: true
  },

  // Options
  width: {
    type: String,
    default: null
  },
  sticky: Boolean,

  // Actions
  actionsSize: { default: defaultProps('actionsSize') },
  actionsAlign: { default: defaultProps('actionsAlign') },
  actionsAxis: undefined,
  actionsAttrs: undefined,

  // Icon
  icon: undefined,
  iconSize: { default: defaultProps('iconSize') },
  iconBackground: { default: defaultProps('iconBackground', true) },
  iconAttrs: undefined
}
