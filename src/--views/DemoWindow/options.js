import { autoClose, disabled, options, persistent, status } from '@/media/--demo/options'

export const windowWidth = {
  value: 'width',
  list: [
    { value: undefined },
    { value: '0px' },
    { value: '280px' },
    { value: '320px' },
    { value: '400px' },
    { value: '640px' }
  ]
}

export const windowSize = {
  value: 'size',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'fullscreen' },
    { value: 'minimum' }
  ]
}

export const windowShape = {
  value: 'shape',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'rounded' },
    { value: 'tile' }
  ]
}

export const windowAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' },
    { value: 'menu' },
    { value: 'modal' },
    { value: 'modal-left' },
    { value: 'modal-right' }
  ]
}

export const windowAxis = {
  value: 'axis',
  list: [
    { value: undefined },
    { value: 'x' },
    { value: 'y' },
    { value: 'on' }
  ]
}

export const windowIndent = {
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
}

export const optionsWindow = {
  status,
  disabled,

  options,
  windowWidth,
  windowSize,
  windowShape,
  windowAxis,
  windowIndent,
  windowAdaptive,
  autoClose,
  persistent
}
