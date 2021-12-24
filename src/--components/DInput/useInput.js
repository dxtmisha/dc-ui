import { computed } from 'vue'

export default function useInput (props) {
  return computed(() => {
    return {
      name: props.name,
      readonly: props.readonly,
      disabled: props.disabled,
      type: props.type,
      autocomplete: props.autocomplete,
      autofocus: props.autofocus,
      inputmode: props.inputmode,
      step: props.step,
      min: props.min,
      max: props.max,
      minlength: props.minlength,
      maxlength: props.maxlength,
      pattern: props.pattern,
      placeholder: props.placeholder,
      required: props.required,
      spellcheck: props.spellcheck,
      ...props.inputAttrs
    }
  })
}
