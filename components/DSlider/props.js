export const props = {
  // Values
  value: undefined,
  name: undefined,
  text: String,
  textLeading: String,
  textTrailing: String,
  helperMessage: String,
  validationMessage: String,
  marks: undefined,
  translation: undefined,
  keyText: undefined,
  keyValue: undefined,
  treatment: Function,

  // Input
  step: undefined,
  min: {
    default: 0
  },
  max: {
    default: 100
  },
  multiple: undefined,
  minimumDistance: undefined,
  required: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: undefined,

  // Status
  active: Boolean,
  disabled: Boolean,

  // Options
  showValue: Boolean,
  showLabel: Boolean,
  showInput: Boolean,
  buttonAttrs: Object,

  // Slider
  palette: undefined,
  color: undefined,
  appearance: undefined,
  vertical: undefined,
  magnet: undefined,
  ripple: undefined,

  // Icon
  icon: [File, String],
  iconActive: [File, String],
  iconTrailing: [File, String]
}
