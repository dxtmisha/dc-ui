import { ref } from 'vue'
import { useWatch } from '@/tool/use/useWatch'

export const setupBadge = function (
  badge,
  badgeIcon = ref(undefined)
) {
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
