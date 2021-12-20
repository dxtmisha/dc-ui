import { readonly, toRefs } from 'vue'

export default function useCarcass (
  props,
  propValidationMessage,
  propCounter,
  active,
  filled
) {
  const refs = toRefs(props)
  const bindCarcassField = readonly({
    text: refs.text,
    helperMessage: refs.helperMessage,
    validationMessage: propValidationMessage,
    counterValue: propCounter,
    maxlength: refs.maxlength,
    required: refs.required,
    active,
    filled,
    selected: refs.selected,
    readonly: refs.readonly,
    disabled: refs.disabled,
    palette: refs.palette,
    color: refs.color,
    appearance: refs.appearance,
    size: refs.size,
    shape: refs.shape,
    align: 'left',
    adaptive: refs.adaptive,
    counter: refs.counter,
    cancel: false,
    icon: refs.icon,
    iconActive: refs.iconActive
  })

  return { bindCarcassField }
}
