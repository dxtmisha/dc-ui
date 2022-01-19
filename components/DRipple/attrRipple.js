import { computed } from 'vue'

export default function attrRipple (props) {
  return computed(() => props.ripple && !props?.disabled && !props?.readonly)
}
