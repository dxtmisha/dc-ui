import { useRefs } from '@/--uses/useRefs'

export const setupCarcassField = function (props) {
  const bindCarcassField = useRefs(props, [
    'icon',
    'iconActive',
    'iconTrailing',
    'text',
    'prefix',
    'suffix',
    'helperMessage',
    'validationMessage',
    'counterValue',
    'maxlength',
    'required',

    'focus',
    'active',
    'selected',
    'filled',
    'turn',
    'readonly',
    'disabled',
    'disabledPrevious',
    'disabledNext',
    'progress',

    'palette',
    'color',
    'arrow',
    'appearance',
    'size',
    'shape',
    'align',
    'adaptive',
    'counter',
    'cancel',
    'ripple'
  ])

  return { bindCarcassField }
}
