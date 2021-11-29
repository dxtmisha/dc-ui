import { useWatch } from '@/--uses/useWatch'
import { computed } from 'vue'

export const useValue = function (props) {
  const tag = computed(() => {
    if (props.type !== 'linear') {
      return 'svg'
    } else if (props.value) {
      return 'progress'
    } else {
      return 'div'
    }
  })

  return {
    tag,
    styleValue
  }
}
