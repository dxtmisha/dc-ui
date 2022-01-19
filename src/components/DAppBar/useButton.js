import { computed, toRefs } from 'vue'
import attrButton from './../DButton/attrButton'

export default function useButton (props, propAction) {
  const {
    iconNavigation,
    iconClose
  } = toRefs(props)

  const active = computed(() => props.open || propAction.value)

  return attrButton({
    props,
    items: {
      icon: iconNavigation,
      iconActive: iconClose,
      active,
      iconTurn: active
    },
    attrs: {
      value: 'navigation',
      appearance: 'text',
      size: 'medium'
    }
  })
}
