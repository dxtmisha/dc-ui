import { computed, readonly, toRefs } from 'vue'

export const setupBadge = function (props) {
  const {
    // Values
    badge,
    badgeIcon
  } = toRefs(props)

  const bindBadge = computed(() => {
    if (badge.value instanceof Object) {
      return badge.value
    } else if (badgeIcon.value || badge.value) {
      return readonly({
        icon: badgeIcon,
        value: badge
      })
    } else {
      return undefined
    }
  })

  return { bindBadge }
}
