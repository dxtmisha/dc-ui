import { readonly, toRefs } from 'vue'

export default function useCarcass (
  props,
  context,
  propValidationMessage,
  propCounter,
  propCancel,
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
    active: filled,
    filled,
    selected: refs.selected,
    disabled: refs.disabled,
    palette: refs.palette,
    color: refs.color,
    appearance: refs.appearance,
    size: refs.size,
    shape: refs.shape,
    align: refs.align,
    adaptive: refs.adaptive,
    arrow: refs.arrow,
    counter: refs.counter,
    cancel: propCancel,
    icon: refs.icon,
    iconActive: refs.iconActive,
    iconTrailing: refs.iconTrailing,
    ...context.attrs
  })

  return { bindCarcassField }
}
