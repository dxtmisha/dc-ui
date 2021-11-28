import { toRefs } from 'vue'
import { useWatch } from '@/--uses/useWatch'

export const setupBadge = function (
  props
) {
  const {
    badge,
    badgeIcon
  } = toRefs(props)

  const bindBadge = useWatch([
    badge,
    badgeIcon
  ], data => {
    if (badge.value instanceof Object) {
      data.value = badge.value
    } else if (badgeIcon.value || badge.value) {
      data.value = {
        icon: badgeIcon.value,
        value: badge.value
      }
    } else {
      data.value = undefined
    }
  })

  return { bindBadge }
}
