import { computed } from 'vue'

export default function attrBadge (props) {
  return computed(() => {
    const binds = typeof props.badge === 'object' ? props.badge : { badge: props.badge }
    return {
      ...binds,
      hide: props.disabled
    }
  })
}
