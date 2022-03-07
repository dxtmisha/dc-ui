import { defaultInit } from '../../uses/useDefault'
import Translation from '../../classes/Translation'

const defaultProps = defaultInit('d-navigation-filter')
export const props = {
  // Values
  title: { default: defaultProps('title', Translation.get('Filters')) },
  fields: [Array, Object],
  save: String,

  // Status
  open: Boolean,

  // Options
  appearance: { default: defaultProps('appearance', 'transparent') },
  width: {
    type: String,
    default: null
  },
  shape: { default: defaultProps('shape') },
  adaptive: { default: defaultProps('adaptive', 'auto-desktop') },
  close: Boolean,
  navigationAttrs: { default: defaultProps('navigationAttrs') },

  // Form
  formAttrs: { default: defaultProps('formAttrs') },

  // Position
  right: { default: defaultProps('right', true) },
  bottom: Boolean,

  // Icon
  iconClose: { default: defaultProps('iconClose', 'close') }
}
