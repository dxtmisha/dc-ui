export const props = {
  // Values
  mask: String,
  value: String,
  match: {
    default: /[0-9]/
  },
  pattern: undefined,
  on: {
    type: Object,
    default: {}
  },

  // Options
  tag: {
    type: String,
    default: 'input'
  }
}
