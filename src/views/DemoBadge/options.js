import {
  bottom,
  dot,
  hide,
  icon,
  left,
  options,
  optionPosition,
  palette,
  shape,
  size,
  status,
  values
} from '@/media/demo/options'

export const badgeBadge = {
  value: 'badge',
  list: [
    { value: undefined },
    { value: 8 },
    { value: 32 },
    { value: 128 },
    { value: 'Demo' },
    { value: 'Interactive demo' }
  ]
}

export const badgeMax = {
  value: 'max',
  list: [
    { value: undefined },
    { value: 9 },
    { value: 99 },
    { value: 999 }
  ]
}

export const badgeAlignment = {
  value: 'alignment',
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'overlap' },
    { value: 'static' }
  ]
}

export const badgeOutline = {
  value: 'outline',
  list: [
    { value: undefined },
    {
      text: 'red',
      value: '#F44336',
      icon: '#F44336'
    },
    {
      text: 'blue',
      value: '#2196F3',
      icon: '#2196F3'
    },
    {
      text: 'green',
      value: '#4CAF50',
      icon: '#4CAF50'
    },
    {
      text: 'yellow',
      value: '#FFEB3B',
      icon: '#FFEB3B'
    },
    {
      text: 'gray',
      value: '#9E9E9E',
      icon: '#9E9E9E'
    }
  ]
}

export const optionsBadge = {
  values,
  icon,
  badgeBadge,
  dot,

  status,
  hide,

  options,
  palette,
  badgeMax,
  badgeAlignment,
  size,
  shape,
  badgeOutline,

  optionsPosition: optionPosition,
  left,
  bottom
}
