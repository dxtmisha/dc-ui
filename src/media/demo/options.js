import { badge } from '@/media/demo/badge'
import { icon } from '@/media/demo/icons'
import { subtitles } from '@/media/demo/subtitles'
import { helper1, quote1, validation1 } from '@/media/demo/texts'

export const optionsList = {
  // Values
  ajax: {
    text: 'Ajax',
    message: '/demo/request/menu.json'
  },
  cache: { text: 'Cache' },
  counterValue: {
    text: 'Character counter',
    message: 4
  },
  description: {
    text: 'Description',
    message: quote1
  },
  helperMessage: {
    text: 'Helper text',
    message: helper1
  },
  maxlength: {
    text: 'Maxlength',
    message: 8
  },
  multiple: { text: 'Multiple' },
  open: { text: 'Open' },
  prefix: {
    text: 'Prefix text',
    message: '+7'
  },
  required: { text: 'Required' },
  suffix: {
    text: 'Suffix text',
    message: '.00'
  },
  text: {
    text: 'Text',
    default: true,
    message: 'Interactive demo'
  },
  textShort: {
    text: 'Text short',
    message: 'Demo'
  },
  validationMessage: {
    text: 'Error text',
    message: validation1
  },

  // Status
  active: { text: 'Active' },
  disabled: { text: 'Disabled' },
  disabledNext: { text: 'Disabled: next' },
  disabledPrevious: { text: 'Disabled: previous' },
  dragged: { text: 'Dragged' },
  focus: { text: 'Focus' },
  hide: { text: 'Hide element' },
  isValue: { text: 'Hide element' },
  progress: { text: 'Progress' },
  readonly: { text: 'Readonly' },
  selected: { text: 'Selected' },
  turn: { text: 'Turn' },
  visible: { text: 'Visible' },
  underline: {
    text: 'Underline',
    message: 'int|demo|support'
  },

  // Options
  adaptive: {
    text: 'Adaptive',
    list: [
      { value: undefined },
      {
        text: 'Auto',
        value: 'auto'
      },
      {
        text: 'Auto: small',
        value: 'auto-small'
      },
      {
        text: 'Auto: medium',
        value: 'auto-medium'
      },
      {
        text: 'Auto: large',
        value: 'auto-large'
      },
      {
        text: 'Auto: extra',
        value: 'auto-extra'
      },
      {
        text: 'Auto: desktop',
        value: 'auto-desktop'
      },
      {
        text: 'Basic',
        value: 'basic'
      },
      {
        text: 'Icon',
        value: 'icon'
      },
      {
        text: 'Block',
        value: 'block'
      }
    ]
  },
  align: {
    text: 'Align',
    list: [
      { value: undefined },
      {
        text: 'Center',
        value: 'center'
      },
      {
        text: 'Left',
        value: 'left'
      },
      {
        text: 'Right',
        value: 'right'
      }
    ]
  },
  animationHide: {
    text: 'Hide animation',
    list: [
      { value: undefined },
      {
        text: 'Type 1',
        value: 'type1'
      },
      {
        text: 'Type 2',
        value: 'type2'
      }
    ]
  },
  animationShow: { text: 'Show with animation' },
  arrow: { text: 'Arrow' },
  autoClose: {
    text: 'Automatic closing',
    default: true
  },
  axis: {
    text: 'Axis',
    list: [
      { value: undefined },
      {
        text: 'X',
        value: 'x'
      },
      {
        text: 'Y',
        value: 'y'
      }
    ]
  },
  background: { text: 'Background' },
  backgroundColor: {
    text: 'Background color',
    message: '244,67,54'
  },
  border: { text: 'Border' },
  bottom: { text: 'Bottom' },
  cancel: { text: 'Cancel' },
  counter: { text: 'Counter' },
  delay: {
    text: 'Delay',
    list: [
      { value: undefined },
      {
        text: '0ms',
        value: 0
      },
      {
        text: '200ms',
        value: 200
      },
      {
        text: '400ms',
        value: 400
      },
      {
        text: '800ms',
        value: 800
      },
      {
        text: '1200ms',
        value: 1200
      }
    ]
  },
  dense: { text: 'Dense' },
  fullscreen: { text: 'Fullscreen' },
  groupShow: { text: 'Show group' },
  indeterminate: {
    text: 'Indeterminate indicators',
    value: 'indeterminate',
    list: [
      { value: undefined },
      {
        text: 'Type 1',
        value: 'type1'
      },
      {
        text: 'Type 2',
        value: 'type2'
      }
    ]
  },
  left: { text: 'Left' },
  lowercase: { text: 'Lowercase' },
  navigationRail: {
    text: 'Navigation rail',
    list: [
      { value: undefined },
      {
        text: 'Small',
        value: 'small'
      },
      {
        text: 'Medium',
        value: 'medium'
      },
      {
        text: 'Medium only',
        value: 'medium-medium'
      },
      {
        text: 'Medium to large',
        value: 'medium-large'
      },
      {
        text: 'Medium to extra',
        value: 'medium-extra'
      },
      {
        text: 'Medium to desktop',
        value: 'medium-desktop'
      },
      {
        text: 'Large',
        value: 'large'
      },
      {
        text: 'Large only',
        value: 'large-large'
      },
      {
        text: 'Large to extra',
        value: 'large-extra'
      },
      {
        text: 'Large to desktop',
        value: 'large-desktop'
      },
      {
        text: 'Extra',
        value: 'extra'
      },
      {
        text: 'Desktop',
        value: 'desktop'
      },
      {
        text: 'Always',
        value: 'always'
      }
    ]
  },
  palette: {
    text: 'Palettes',
    list: [
      { value: undefined },
      {
        text: 'Base color',
        value: 'basic'
      },
      {
        text: 'Primary color',
        value: 'primary'
      },
      {
        text: 'Secondary color',
        value: 'secondary'
      },
      {
        text: 'Tertiary color',
        value: 'tertiary'
      },
      {
        text: 'Color: successful',
        value: 'success'
      },
      {
        text: 'Color: information',
        value: 'info'
      },
      {
        text: 'Color: warning',
        value: 'warning'
      },
      {
        text: 'Color: error',
        value: 'error'
      },
      {
        text: 'Color: disabled',
        value: 'disabled'
      }
    ]
  },
  persistent: { text: 'Persistent' },
  ripple: {
    text: 'Ripple',
    default: true
  },
  shape: {
    text: 'Shape',
    list: [
      { value: undefined },
      {
        text: 'Basic',
        value: 'basic'
      },
      {
        text: 'Rounded',
        value: 'rounded'
      },
      {
        text: 'Pill',
        value: 'pill'
      },
      {
        text: 'Tile',
        value: 'tile'
      }
    ]
  },
  size: {
    text: 'Size',
    list: [
      { value: undefined },
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
      }
    ]
  },

  ...badge,
  ...icon,
  ...subtitles
}
