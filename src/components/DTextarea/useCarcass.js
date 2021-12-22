import { computed, toRefs } from 'vue'
import attrField from '@/components/DCarcassField/attrField'

export default function useCarcass (
  props,
  propValidationMessage,
  propValue,
  propCounter
) {
  const refs = toRefs(props)

  const active = computed(() => !!propValue.value || !!props.placeholder)
  const filled = computed(() => !!propValue.value)

  return attrField(props, {
    ...refs,
    validationMessage: propValidationMessage,
    counterValue: propCounter,
    active,
    filled
  }, {
    cancel: false
  })
}
