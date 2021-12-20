import { defaultInit, validator } from '@/--uses/useDefault'
import Geo from '@/classes/Geo'

const defaultProps = defaultInit('d-select')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,

  // Status
  selected: Boolean,
  disabled: Boolean,

  // List
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
  multiple: Boolean,

  // Select
  type: {
    type: String,
    default: 'select',
    validator: validator([
      'select',
      'month',
      'week'
    ])
  },
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  maxlength: Number,
  required: Boolean,
  attrsSelect: Object,

  // Field
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  arrow: undefined,
  counter: undefined,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: {
    type: String,
    default: defaultProps('menuWidth', '280px')
  }
}
