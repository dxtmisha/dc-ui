import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-select')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
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
  ajax: undefined,
  request: Object,
  cache: Boolean,
  isNone: {
    type: Boolean,
    default: defaultProps('isNone')
  },

  // Input
  maxlength: Number,
  multiple: Boolean,
  required: Boolean,
  inputAttrs: undefined,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Options
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
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  arrow: undefined,
  counter: undefined,
  cancel: undefined,
  ripple: undefined,
  fieldAttrs: undefined,

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWindowWidth: { default: defaultProps('menuWindowWidth', '280px') },
  menuWindowInDom: { default: defaultProps('menuWindowInDom') },
  menuAttrs: undefined,

  // Select value
  selectValueAttrs: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') }
}
