import { defaultInit } from '@/--uses/useDefault'

export const defaultProps = defaultInit('d-textarea')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,
  required: Boolean,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Input
  autocomplete: String,
  autofocus: Boolean,
  inputmode: String,
  minlength: Number,
  maxlength: Number,
  placeholder: String,
  spellcheck: Boolean,
  attrsInput: Object,
  on: {
    type: Object,
    default: {}
  },

  // Field
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  counter: Boolean
}
