import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-tab-picker')
export const props = {
  // Values
  list: undefined,
  listInit: undefined,
  translation: { default: defaultProps('translation') },
  keyText: { default: defaultProps('keyText', 'text') },
  keyValue: { default: defaultProps('keyValue', 'value') },

  // Status
  selected: String,
  modelValue: undefined,

  // Options
  appearance: { default: defaultProps('appearance', 'value') },
  adaptive: { default: defaultProps('adaptive', 'value') },
  navigationRail: { default: defaultProps('navigationRail', 'value') },
  dynamic: { default: defaultProps('dynamic', 'value') },
  ripple: { default: defaultProps('ripple', 'value') },
  itemAttrs: { default: defaultProps('itemAttrs', 'value') },

  // Icon
  iconBackground: { default: defaultProps('iconBackground') }
}
