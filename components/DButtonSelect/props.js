import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-button-select')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
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
  ajax: [Function, String],
  request: Object,
  cache: Boolean,

  // Input
  maxlength: Number,
  multiple: Boolean,
  inputAttrs: undefined,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

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
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: { default: defaultProps('appearance', 'chip') },
  size: { default: defaultProps('size') },
  shape: { default: defaultProps('shape') },
  align: { default: defaultProps('align', 'left') },
  adaptive: { default: defaultProps('adaptive') },
  lowercase: { default: defaultProps('lowercase') },
  dense: { default: defaultProps('dense') },
  ellipsis: { default: defaultProps('ellipsis') },
  ripple: { default: defaultProps('ripple') },
  buttonAttrs: undefined,

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWindowWidth: { default: defaultProps('menuWindowWidth') },
  menuWindowInDom: { default: defaultProps('menuWindowInDom') },
  menuAttrs: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') },
  iconBackground: undefined
}
