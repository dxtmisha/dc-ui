import { readonly, toRefs } from 'vue'

export default function useCarcass (
  props,
  context,
  propValidationMessage,
  filled
) {
  const refs = toRefs(props)
  const bindCarcassField = readonly({
    text: refs.text,
    helperMessage: refs.helperMessage,
    validationMessage: propValidationMessage,
    required: refs.required,
    active: filled,
    filled,
    selected: refs.selected,
    readonly: refs.readonly,
    disabled: refs.disabled,
    palette: refs.palette,
    color: refs.color,
    appearance: refs.appearance,
    size: refs.size,
    shape: refs.shape,
    align: refs.align,
    adaptive: refs.adaptive,
    cancel: refs.cancel,
    icon: refs.icon,
    iconActive: refs.iconActive,
    iconTrailing: refs.iconArrowDown,
    ...context.attrs
  })

  return { bindCarcassField }
}
