import { defaultInit, validator } from './../../uses/useDefault'

const defaultProps = defaultInit('d-table-picker')
export const props = {
  // Values
  headers: undefined,
  headersInit: {
    type: Boolean,
    default: true
  },
  translation: {
    type: Array,
    default: defaultProps('translation')
  },
  keyText: {
    type: String,
    default: defaultProps('keyText', 'text')
  },
  keyValue: {
    type: String,
    default: defaultProps('keyValue', 'value')
  },
  items: [Array, Object],
  sort: String,
  dest: Boolean,
  page: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: defaultProps('rows', 10)
  },

  // Options
  checkbox: { default: defaultProps('checkbox') },
  size: { default: defaultProps('size') },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
  },
  align: { default: defaultProps('align') },
  sticky: { default: defaultProps('sticky') },
  dense: Boolean,

  // Pagination
  paginationMenu: {
    default: defaultProps('paginationMenu', [
      { value: 10 },
      { value: 25 },
      { value: 50 },
      { value: 75 },
      { value: 100 }
    ])
  },
  paginationLength: { default: defaultProps('paginationLength') },
  paginationShowInfo: { default: defaultProps('paginationShowInfo', true) },
  paginationShowMore: { default: defaultProps('paginationShowMore') },
  paginationAttrs: undefined
}
