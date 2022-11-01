import { computed, toRefs } from 'vue'
import attrField from '../DCarcassField/attrField'

export default function useCarcass (
  props,
  context,
  propValidationMessage,
  propValue
) {
  const { iconArrowDown } = toRefs(props)

  const filled = computed(() => !!propValue.value)

  return attrField({
    props,
    items: {
      validationMessage: propValidationMessage,
      active: filled,
      filled,
      iconTrailing: iconArrowDown
    },
    attrs: context.attrs
  })
}
