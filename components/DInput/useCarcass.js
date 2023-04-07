import { computed } from 'vue'
import attrField from '../DCarcassField/attrField'

export default function useCarcass (
  props,
  isMask,
  propValidationMessage,
  propValue,
  propCounter
) {
  const active = computed(() => !!propValue.value || !!props.placeholder || (isMask.value && props.maskVisible))
  const filled = computed(() => !!propValue.value)

  const isPrevious = computed(
    () => typeof props.min === 'number' ? (parseInt(propValue.value) || 0) <= props.min : false
  )
  const isNext = computed(
    () => typeof props.max === 'number' ? (parseInt(propValue.value) || 0) >= props.max : false
  )

  return attrField({
    props,
    items: {
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active,
      filled,
      disabledPrevious: isPrevious,
      disabledNext: isNext
    }
  })
}
