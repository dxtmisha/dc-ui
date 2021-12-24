import { computed, toRefs } from 'vue'
import attrButton from '@/--components/attrButton'

export default function useButton (props, propAction) {
  const {
    iconNavigation,
    iconClose
  } = toRefs(props)

  const active = computed(() => props.open || propAction.value)

  return attrButton(props, {
    icon: iconNavigation,
    iconActive: iconClose,
    active,
    iconTurn: active
  }, {
    value: 'navigation',
    appearance: 'text',
    size: 'medium',
    shape: 'pill'
  })
}
