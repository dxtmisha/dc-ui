import { computed } from 'vue'

export default function useIcon (props) {
  const bindThumbnail = computed(() => {
    return {
      class: 'd-list-item__icon li-thumbnail',
      icon: props.thumbnail,
      iconActive: props.iconActive,
      active: props.selected,
      disabled: props.disabled,
      size: props.size,
      animationShow: props.iconAnimationShow,
      background: true
    }
  })
  const bindIcon = computed(() => {
    return {
      class: 'd-list-item__icon li-icon',
      icon: props.icon,
      iconActive: props.iconActive,
      active: props.selected,
      disabled: props.disabled,
      size: 'small',
      animationShow: props.iconAnimationShow,
      background: props.iconBackground
    }
  })
  const bindTrailing = computed(() => {
    return {
      class: {
        'd-list-item__icon li-trailing': true,
        'window-control-static': props.iconReadonly
      },
      icon: props.iconTrailing,
      turn: props.turn,
      disabled: props.disabled,
      size: 'small'
    }
  })

  return {
    bindThumbnail,
    bindIcon,
    bindTrailing
  }
}
