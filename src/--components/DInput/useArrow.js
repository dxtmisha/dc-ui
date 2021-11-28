import { useWatch } from '@/--uses/useWatch'

export const useArrow = function (
  value,
  min,
  max,
  step,
  change,
  emit
) {
  const isPrevious = useWatch([value, min], data => {
    data.value = typeof min.value === 'number' && value.value ? parseInt(value.value) <= min.value : false
  })
  const isNext = useWatch([value, max], data => {
    data.value = typeof max.value === 'number' && value.value ? parseInt(value.value) >= max.value : false
  })

  const onPrevious = () => {
    change.value = true
    value.value = parseFloat(value.value || max.value || '0') - (step.value || 1) || ''
    requestAnimationFrame(() => emit())
  }
  const onNext = () => {
    change.value = true
    value.value = parseFloat(value.value || min.value || '0') + (step.value || 1) || ''
    requestAnimationFrame(() => emit())
  }

  return {
    isPrevious,
    isNext,
    onPrevious,
    onNext
  }
}
