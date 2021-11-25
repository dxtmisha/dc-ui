import { readonly as read } from 'vue'

export const useInput = function (
  name,
  required,
  readonly,
  disabled,
  type,
  autocomplete,
  autofocus,
  inputmode,
  min,
  max,
  minlength,
  maxlength,
  pattern,
  placeholder,
  spellcheck,
  step,
  attrsInput
) {
  const bindInput = read({
    name,
    required,
    readonly,
    disabled,
    type,
    autocomplete,
    autofocus,
    inputmode,
    min,
    max,
    minlength,
    maxlength,
    pattern,
    placeholder,
    spellcheck,
    step,
    ...attrsInput.value
  })

  return {
    bindInput
  }
}
