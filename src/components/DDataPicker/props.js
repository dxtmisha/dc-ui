import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-data-picker')
export const props = {
  // Values
  headers: undefined,
  headersInit: {
    type: Boolean,
    default: true
  },
  list: undefined,
  listInit: {
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
  ajax: String,
  request: Object,
  cache: Boolean
}
