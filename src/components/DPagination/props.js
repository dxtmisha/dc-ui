import { defaultInit } from './../../uses/useDefault'

const defaultProps = defaultInit('d-pagination')
export const props = {
  // Values
  value: {
    type: Number,
    default: 1
  },
  count: Number,
  rows: Number,
  menu: Array,

  // Options
  length: {
    type: Number,
    default: defaultProps('length', 3)
  },
  showInfo: Boolean,
  showMore: Boolean,

  // Button
  buttonAttrs: { default: defaultProps('buttonAttrs') },

  // Icon
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') },
  iconChevronLeft: { default: defaultProps('iconChevronLeft', 'chevron_left') },
  iconChevronRight: { default: defaultProps('iconChevronRight', 'chevron_right') },
  iconFirst: { default: defaultProps('iconFirst', 'first_page') },
  iconLast: { default: defaultProps('iconLast', 'last_page') }
}
