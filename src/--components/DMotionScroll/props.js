export const props = {
  // Values
  page: String,

  // Options
  tag: {
    type: String,
    default: 'div'
  },
  element: [HTMLElement, Object],
  scrollHide: Boolean
}
