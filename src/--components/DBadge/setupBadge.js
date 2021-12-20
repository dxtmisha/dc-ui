import { toRefs } from 'vue'
import useWatch from '@/uses/useWatch'

export default function setupBadge (props) {
  const {
    badge,
    disabled
  } = toRefs(props)

  const bindBadge = useWatch(badge, data => {
    data.value = undefined

    if (badge.value) {
      const binds = typeof badge.value === 'object' ? badge.value : { badge: badge.value }
      data.value = {
        ...binds,
        hide: disabled
      }
    }
  })

  return { bindBadge }
}
