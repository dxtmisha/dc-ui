import { computed } from 'vue'
import attrField from '../DCarcassField/attrField'

export default function useCarcass (
  props,
  propValidationMessage,
  propValue,
  propCounter
) {
  const active = computed(() => !!propValue.value || !!props.placeholder)
  const filled = computed(() => !!propValue.value)

  return attrField({
    props,
    items: {
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active,
      filled
    },
    attrs: { cancel: false }
  })
}
