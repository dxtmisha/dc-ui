import { readonly, toRefs } from 'vue'

export default function useCarcass (
  props,
  propValidationMessage,
  propCounter,
  active,
  filled,
  isPrevious,
  isNext
) {
  const refs = toRefs(props)
  const bindCarcassField = readonly({
    text: refs.text,
    prefix: refs.prefix,
    suffix: refs.suffix,
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
    disabledPrevious: isPrevious,
    disabledNext: isNext,
    palette: refs.palette,
    color: refs.color,
    appearance: refs.appearance,
    size: refs.size,
    shape: refs.shape,
    align: refs.align,
    adaptive: refs.adaptive,
    arrow: refs.arrow,
    counter: refs.counter,
    cancel: refs.cancel,
    icon: refs.icon,
    iconActive: refs.iconActive,
    iconTrailing: refs.iconTrailing
  })

  return { bindCarcassField }
}
