import { computed } from 'vue'
import attrField from '../DCarcassField/attrField'

export default function useCarcass (
  props,
  propValidationMessage,
  propValue,
  propCounter,
  propPlaceholder
) {
  const active = computed(() => !!propValue.value || !!propPlaceholder.value)
  const filled = computed(() => !!propValue.value)

  return attrField({
    props,
    items: {
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active,
      filled
    }
  })
}
