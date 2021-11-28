import {
  active,
  animationHide,
  animationShow,
  background,
  disabled,
  hide,
  icon,
  iconActive,
  options,
  status,
  turn,
  values
} from '@/media/demo/options'

export const iconSize = {
  value: 'size',
  list: [
    { value: undefined },
    { value: 'dynamic' },
    { value: 'compact' },
    { value: 'small' },
    { value: 'medium' },
    { value: 'large' },
    { value: 'rectangle' }
  ]
}

export const optionsIcon = {
  values,
  icon,
  iconActive,

  status,
  active,
  turn,
  disabled,
  hide,

  options,
  iconSize,
  animationHide,
  animationShow,
  background
}
