import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-images')
export const props = {
  // Values
  list: [Array, Object],
  listInit: {
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

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'standard'),
    validator: validator([
      'standard',
      'quilted',
      'woven',
      'masonry-horizontal',
      'masonry-vertical'
    ])
  },
  size: {
    type: String,
    default: defaultProps('size', null)
  },
  gap: {
    type: String,
    default: defaultProps('gap', null)
  },

  // Bar
  barSize: { default: defaultProps('barSize') },
  barDisplay: { default: defaultProps('barDisplay') }
}
