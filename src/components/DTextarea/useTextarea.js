import { computed } from 'vue'

export default function useTextarea (props) {
  return computed(() => {
    return {
      name: props.name,
      readonly: props.readonly,
      disabled: props.disabled,
      autocomplete: props.autocomplete,
      autofocus: props.autofocus,
      inputmode: props.inputmode,
      minlength: props.minlength,
      maxlength: props.maxlength,
      placeholder: props.placeholder,
      required: props.required,
      spellcheck: props.spellcheck,
      ...props.inputAttrs
    }
  })
}
