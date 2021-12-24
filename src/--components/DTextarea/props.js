export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,

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
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: Object,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Options
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  counter: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined
}
