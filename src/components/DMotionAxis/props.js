import { validator } from './../../uses/useDefault'

export const props = {
  // Status
  selected: String,

  // Options
  axis: {
    type: String,
    default: 'x',
    validator: validator([
      'x',
      'y',
      'z'
    ])
  },
  transition: {
    type: String,
    default: 'next',
    validator: validator([
      'next',
      'back'
    ])
  }
}
