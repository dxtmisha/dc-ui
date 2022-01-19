import { defaultInit } from './../../uses/useDefault'

const defaultProps = defaultInit('d-data-picker')
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
  list: undefined,
  listInit: {
    type: Boolean,
    default: true
  },
  ajax: [Function, String],
  request: Object,
  cache: Boolean,
  underline: undefined,
  filters: [Object, Function],
  page: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: defaultProps('rows', 15)
  },

  // Status
  disabled: Boolean,

  // Options
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  sticky: undefined,
  dense: undefined,
  column: undefined,
  border: undefined,

  // Pagination
  paginationMenu: {
    default: defaultProps('paginationMenu', [
      { value: 10 },
      { value: 15 },
      { value: 25 },
      { value: 50 },
      { value: 75 },
      { value: 100 }
    ])
  },
  paginationLength: { default: defaultProps('paginationLength') },
  paginationShowInfo: { default: defaultProps('paginationShowInfo', true) },
  paginationShowMore: { default: defaultProps('paginationShowMore', true) },
  paginationAttrs: undefined,

  // Icon
  iconBackground: undefined,
  iconAttrs: undefined
}
