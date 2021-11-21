export const optionsCarcassFieldAdaptive = {
  text: 'Adaptive',
  value: 'adaptive',
  list: [
    { value: undefined },
    {
      text: 'Basic',
      value: 'basic'
    },
    {
      text: 'Block',
      value: 'block'
    }
  ]
}

export const optionsCarcassFieldAppearance = {
  text: 'Appearance',
  value: 'appearance',
  list: [
    { value: undefined },
    {
      text: 'Basic',
      value: 'basic'
    },
    {
      text: 'Classic',
      value: 'classic'
    },
    {
      text: 'Filled',
      value: 'filled'
    },
    {
      text: 'Outlined',
      value: 'outlined'
    }
  ]
}

export const optionsCarcassFieldSize = {
  text: 'Size',
  value: 'size',
  list: [
    { value: undefined },
    {
      text: 'Dense',
      value: 'dense'
    },
    {
      text: 'Small',
      value: 'small'
    },
    {
      text: 'Medium',
      value: 'medium'
    },
    {
      text: 'Large',
      value: 'large'
    },
    {
      text: 'Interactive display',
      value: 'interactive-display'
    }
  ]
}

export const optionsCarcassField = [
  'values',
  'icon',
  'iconActive',
  'iconTrailing',
  'text',
  'prefix',
  'suffix',
  'helperMessage',
  'validationMessage',
  'counterValue',
  'maxlength',
  'required',

  'status',
  'focus',
  'selected',
  'turn',
  'readonly',
  'disabled',
  'disabledPrevious',
  'disabledNext',
  'progress',

  'options',
  'arrow',
  optionsCarcassFieldAppearance,
  optionsCarcassFieldSize,
  'shape',
  'align',
  optionsCarcassFieldAdaptive,
  'counter',
  'cancel',
  'ripple'
]
