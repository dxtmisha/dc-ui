import { defaultInit, validator } from '@/--uses/useDefault'
import Geo from '@/classes/Geo'

export const defaultProps = defaultInit('d-select')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,
  required: Boolean,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Options
  palette: undefined,
  color: undefined,

  // Input
  type: {
    type: String,
    default: 'select',
    validator: validator([
      'select',
      'month',
      'week'
    ])
  },
  list: undefined,
  listInit: undefined,
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
  cache: Boolean,
  maxlength: Number,
  multiple: Boolean,
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },

  // Field
  arrow: Boolean,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  counter: Boolean,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: {
    type: String,
    default: defaultProps('menuWidth', '280px')
  },

  // Icon
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  }
}
