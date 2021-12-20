import { computed } from 'vue'

export default function setupRipple (props) {
  const isRipple = computed(() => props.ripple && !props?.disabled && !props?.readonly)
  return { isRipple }
}
