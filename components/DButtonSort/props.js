import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-button-sort')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  desc: Boolean,
  name: undefined,
  text: undefined,
  list: undefined,
  listInit: undefined,
  translation: { default: defaultProps('translation') },
  keyText: { default: defaultProps('keyText', 'text') },
  keyValue: { default: defaultProps('keyValue', 'value') },

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Select
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
  iconArrowDownWard: { default: defaultProps('iconArrowDownWard', 'arrow_downward') },
  iconBackground: undefined
}
