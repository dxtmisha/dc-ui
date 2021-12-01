import { computed } from 'vue'

export default function useArrow (
  props,
  value,
  change,
  emit
) {
  const isPrevious = computed(() => typeof props.min === 'number' && value.value ? parseInt(value.value) <= props.min : false)
  const isNext = computed(() => typeof props.max === 'number' && value.value ? parseInt(value.value) >= props.max : false)

  const onPrevious = () => {
    change.value = true
    value.value = parseFloat(value.value || props.max || '0') - (props.step || 1) || ''
    emit()
  }
  const onNext = () => {
    change.value = true
    value.value = parseFloat(value.value || props.min || '0') + (props.step || 1) || ''
    emit()
  }

  return {
    isPrevious,
    isNext,
    onPrevious,
    onNext
  }
}
