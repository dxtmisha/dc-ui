const basic = [
  { value: undefined },
  { value: 'auto' },
  { value: 'auto-small' },
  { value: 'auto-medium' },
  { value: 'auto-large' },
  { value: 'auto-extra' },
  { value: 'auto-desktop' }
]

export const adaptive = [
  ...basic,
  { value: 'basic' },
  { value: 'icon' },
  { value: 'block' }
]

export const adaptiveMotionTransform = [
  ...basic,
  { value: 'panel' },
  { value: 'section' },
  { value: 'window' }
]

export const adaptiveWindow = [
  ...basic,
  { value: 'menu' },
  { value: 'modal' },
  { value: 'modal-left' },
  { value: 'modal-right' }
]
