import { useRefs } from '@/--uses/useRefs'

export const setupButton = function (props) {
  const bindButton = useRefs(props, [
    'icon',
    'iconActive',
    'iconTrailing',
    'badge',
    'badgeIcon',
    'item',
    'value',
    'text',

    'selected',
    'turn',
    'dragged',
    'readonly',
    'disabled',
    'progress',

    'palette',
    'color',
    'tag',
    'appearance',
    'size',
    'shape',
    'align',
    'adaptive',
    'lowercase',
    'dense',
    'ripple',

    'iconReadonly',
    'iconHide',
    'iconAnimationShow',
    'iconBackground'
  ])

  return { bindButton }
}
