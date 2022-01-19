import { defaultInit, validatorAlign, validatorShape } from '../../uses/useDefault'
import { palette } from '../../uses/useColor'
import Translation from '../../classes/Translation'

const defaultProps = defaultInit('d-snackbar')
export const props = {
  // Values
  items: Array,

  // Status
  open: Boolean,

  // Actions
  bar: {
    type: [Array, Object],
    default: defaultProps('bar', [
      {
        text: Translation.get('Dismiss'),
        value: 'close'
      }
    ])
  },

  // Options
  palette,
  color: String,
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  align: {
    type: String,
    default: defaultProps('align'),
    validator: validatorAlign
  },
  timeout: {
    type: Number,
    default: defaultProps('timeout', 4000)
  },
  interspace: {
    type: Number,
    default: defaultProps('interspace', 160)
  }
}
