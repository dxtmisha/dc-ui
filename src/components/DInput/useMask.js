import { computed } from 'vue'
import attrMask from './../DMask/attrMask'

export default function useMask (props) {
  const isMask = computed(() => !props.arrow &&
    (
      [
        'date',
        'datetime',
        'month',
        'time'
      ].indexOf(props.type) !== -1 ||
      ((props.type === 'text' || !props.type) && props.mask)
    ))

  const bindMask = attrMask({ props })

  return {
    isMask,
    bindMask
  }
}
