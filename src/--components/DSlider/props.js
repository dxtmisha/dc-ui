export const props = {
  // Values
  marks: undefined,
  value: undefined,
  translation: undefined,
  keyText: undefined,
  keyValue: undefined,
  name: undefined,
  text: String,
  textLeading: String,
  textTrailing: String,
  helperMessage: String,
  validationMessage: String,
  treatment: Function,
  on: {
    type: Object,
    default: {}
  },

  // Status
  active: Boolean,
  disabled: Boolean,

  // Options
  showValue: Boolean,
  showLabel: Boolean,
  showInput: Boolean,
  attrsButton: Object,

  // Input
  multiple: undefined,
  minimumDistance: undefined,
  step: undefined,
  min: {
    default: 0
  },
  max: {
    default: 100
  },
  required: Boolean,
  attrsInput: Object,

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
