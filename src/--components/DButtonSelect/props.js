import { defaultInit, validator } from '@/--uses/useDefault'
import Geo from '@/classes/Geo'

const defaultProps = defaultInit('d-button-select')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,

  // Status
  selected: Boolean,
  readonly: Boolean,
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
  attrsSelect: Object,

  // Button
  text: undefined,
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'chip')
  },
  size: undefined,
  shape: undefined,
  align: {
    type: String,
    default: defaultProps('align', 'left')
  },
  adaptive: undefined,
  lowercase: undefined,
  dense: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },
  iconBackground: undefined,

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: {
    type: String,
    default: defaultProps('menuWidth', '0px')
  }
}
