import { badge } from '@/media/demo/badge'
import { icon } from '@/media/demo/icons'
import { subtitles } from '@/media/demo/subtitles'

export const optionsList = {
  // Values
  open: { text: 'Open' },
  text: {
    text: 'Text',
    default: true,
    message: 'Interactive demo'
  },

  // Status
  active: { text: 'Active' },
  disabled: { text: 'Disabled' },
  dragged: { text: 'Dragged' },
  hide: { text: 'Hide element' },
  progress: { text: 'Progress' },
  readonly: { text: 'Readonly' },
  selected: { text: 'Selected' },
  turn: { text: 'Turn' },
  visible: { text: 'Visible' },

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
  autoClose: { text: 'Automatic closing' },
  background: { text: 'Background' },
  border: { text: 'Border' },
  bottom: { text: 'Bottom' },
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
