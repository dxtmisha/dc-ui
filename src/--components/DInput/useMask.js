import { computed, toRefs } from 'vue'
import attrMask from '@/--components/DMask/attrMask'

export default function useMask (props) {
  const refs = toRefs(props)
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

  const bindMask = attrMask(props, {
    value: refs.value,
    mask: refs.mask,
    on: refs.on,
    type: refs.type
  })

  return {
    isMask,
    bindMask
  }
}
