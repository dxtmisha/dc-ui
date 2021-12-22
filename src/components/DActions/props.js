import { defaultInit, validator, validatorAxis, validatorSize } from '@/uses/useDefault'
import Translation from '../../classes/Translation'

const defaultProps = defaultInit('d-actions')
export const props = {
  // Values
  bar: {
    type: Array,
    default: [
      {
        text: Translation.get('Cancel'),
        value: 'cancel'
      },
      {
        text: Translation.get('Ok'),
        value: 'ok'
      }
    ]
  },
  barAction: Array,

  // Options
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  align: {
    type: String,
    validator: validator([
      'center',
      'left',
      'right',
      'block'
    ])
  },
  axis: {
    type: String,
    validator: validatorAxis
  },

  // Button
  buttonAppearance: { default: defaultProps('buttonAppearance', 'text-color') },
  buttonSize: { default: defaultProps('buttonSize', 'medium') },
  buttonShape: { default: defaultProps('buttonShape') },
  buttonAdaptive: { default: defaultProps('buttonAdaptive', 'basic') },
  buttonAttrs: Object
}
