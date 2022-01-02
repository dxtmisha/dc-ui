import { defaultInit, validatorAlign, validatorShape, validatorSize } from '@/uses/useDefault'

const defaultProps = defaultInit('d-table')
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

  // Status
  readonly: Boolean,

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
    validator: validatorShape
  },
  align: {
    type: String,
    default: defaultProps('align', 'left'),
    validator: validatorAlign
  },
  dense: Boolean,

  // Icon
  iconArrowDownWard: { default: defaultProps('iconArrowDownWard', 'arrow_downward') }
}
