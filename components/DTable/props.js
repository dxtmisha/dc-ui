import { defaultInit, validatorAlign, validatorSize } from '../../uses/useDefault'

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
  checkbox: {
    type: Boolean,
    default: defaultProps('checkbox')
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
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

  // Icon
  iconArrowDownWard: { default: defaultProps('iconArrowDownWard', 'arrow_downward') }
}
