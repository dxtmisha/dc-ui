import { toRefs } from 'vue'
import attrButton from '../DButton/attrButton'

export default function useButton (
  props,
  context,
  propValue
) {
  const { iconArrowDown } = toRefs(props)

  return attrButton({
    props,
    pointer: [
      'item',
      'value',
      'selected',
      'readonly',
      'disabled',
      'palette',
      'color',
      'tag',
      'appearance',
      'size',
      'shape',
      'align',
      'adaptive',
      'lowercase',
      'dense',
      'ellipsis',
      'minimum',
      'ripple',
      'icon',
      'iconActive',
      'iconBackground'
    ],
    items: {
      item: undefined,
      value: propValue,
      iconTrailing: iconArrowDown
    },
    attrs: context.attrs
  })
}
