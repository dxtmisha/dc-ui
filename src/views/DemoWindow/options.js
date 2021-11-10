export const optionsWindow = [
  'status',
  'open',
  'disabled',

  'options',
  {
    text: 'Shape',
    value: 'shape',
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
        text: 'Tile',
        value: 'tile'
      }
    ]
  },
  {
    text: 'Axis',
    value: 'axis',
    list: [
      { value: undefined },
      {
        text: 'X',
        value: 'x'
      },
      {
        text: 'Y',
        value: 'y'
      },
      {
        text: 'On',
        value: 'on'
      }
    ]
  },
  {
    text: 'Width',
    value: 'width',
    list: [
      { value: undefined },
      {
        text: '280px',
        value: '280px'
      },
      {
        text: '320px',
        value: '320px'
      },
      {
        text: '400px',
        value: '400px'
      },
      {
        text: '640px',
        value: '640px'
      }
    ]
  },
  {
    text: 'Indent',
    value: 'indent',
    list: [
      { value: undefined },
      {
        text: '0px',
        value: 0
      },
      {
        text: '4px',
        value: 4
      },
      {
        text: '8px',
        value: 8
      },
      {
        text: '16px',
        value: 16
      },
      {
        text: '32px',
        value: 32
      }
    ]
  },
  {
    text: 'Adaptive',
    value: 'adaptive',
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
        text: 'Menu',
        value: 'menu'
      },
      {
        text: 'Modal',
        value: 'modal'
      }
    ]
  },
  'fullscreen',
  'persistent',
  'autoClose',
  {
    text: 'Body: automatic width',
    value: 'bodyWidthAuto'
  }
]
