import { computed, toRefs } from 'vue'
import attrField from '@/components/DCarcassField/attrField'

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
