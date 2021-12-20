export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  on: {
    type: Object,
    default: {}
  },

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Input
  autocomplete: {
    type: String,
    default: 'off'
  },
  autofocus: Boolean,
  inputmode: String,
  minlength: Number,
  maxlength: Number,
  placeholder: String,
  required: Boolean,
  spellcheck: Boolean,
  attrsInput: Object,

  // Field
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  counter: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined
}
