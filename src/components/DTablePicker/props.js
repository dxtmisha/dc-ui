import { defaultInit, validator, validatorAlign, validatorSize } from '@/uses/useDefault'

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
  page: {
    type: Number,
    default: 1
  },
  sort: String,
  dest: Boolean,
  rows: {
    type: Number,
    default: defaultProps('rows', 10)
  },
  menu: {
    type: Array,
    default: defaultProps('menu', [
      { value: 10 },
      { value: 25 },
      { value: 50 },
      { value: 75 },
      { value: 100 }
    ])
  },

  // Options
  checkbox: Boolean,
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
  },
  align: {
    type: String,
    default: defaultProps('align', 'left'),
    validator: validatorAlign
  },
  sticky: {
    type: Boolean,
    default: defaultProps('sticky', true)
  },
  dense: Boolean,

  // Pagination
  showInfo: {
    type: Boolean,
    default: defaultProps('showInfo', true)
  },
  showMore: {
    type: Boolean,
    default: defaultProps('showMore', false)
  }
}
