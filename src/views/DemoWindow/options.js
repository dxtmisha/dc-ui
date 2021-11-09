export const adaptive = {
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
      text: 'Menu',
      value: 'menu'
    },
    {
      text: 'Modal',
      value: 'modal'
    }
  ]
}

export const axis = {
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
    },
    {
      text: 'On',
      value: 'on'
    }
  ]
}

export const indent = {
  text: 'Indent',
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
}

export const shape = {
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
      text: 'Tile',
      value: 'tile'
    }
  ]
}

export const width = {
  text: 'Width',
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
}

export const optionsWindow = [
  'status',
  'open',
  'disabled',

  'options',
  shape,
  axis,
  width,
  indent,
  adaptive,
  'fullscreen'
]
