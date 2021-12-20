import { computed } from 'vue'

export default function useTextarea (props) {
  const bindTextarea = computed(() => {
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
      ...props.attrsInput
    }
  })

  return { bindTextarea }
}
