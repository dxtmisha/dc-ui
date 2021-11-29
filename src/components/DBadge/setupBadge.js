import { computed } from 'vue'

export default function setupBadge (props) {
  const bindBadge = computed(() => !props.badge
    ? undefined
    : typeof props.badge === 'object' ? props.badge : { badge: props.badge })

  return { bindBadge }
}
