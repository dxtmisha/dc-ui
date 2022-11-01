import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-tab-picker')
export const props = {
  // Values
  list: undefined,
  listInit: undefined,
  translation: { default: defaultProps('translation') },
  keyText: { default: defaultProps('keyText') },
  keyValue: { default: defaultProps('keyValue') },

  // Status
  selected: String,
  modelValue: undefined,

  // Options
  appearance: { default: defaultProps('appearance') },
  adaptive: { default: defaultProps('adaptive') },
  navigationRail: { default: defaultProps('navigationRail') },
  dynamic: { default: defaultProps('dynamic') },
  animationShow: {
    type: Boolean,
    default: defaultProps('animationShow', true)
  },
  ripple: { default: defaultProps('ripple') },
  itemAttrs: { default: defaultProps('itemAttrs') },

  // Icon
  iconBackground: { default: defaultProps('iconBackground') }
}
