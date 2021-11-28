import { useWatch } from '@/--uses/useWatch'

export const useValue = function (
  value,
  max,
  type
) {
  const tag = useWatch([
    value,
    type
  ], data => {
    if (type.value !== 'linear') {
      data.value = 'svg'
    } else if (value.value) {
      data.value = 'progress'
    } else {
      data.value = 'div'
    }
  })

  const styleValue = useWatch([
    value,
    max
  ], data => {
    data.value = {
      '--_pr__vl-value': value.value,
      '--_pr__vl-max': max.value
    }
  })

  return {
    tag,
    styleValue
  }
}
