import { autoClose, bottom, click, open, options, status } from '@/media/demo/options'

export const motionTransformAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' },
    { value: 'panel' },
    { value: 'section' },
    { value: 'window' }
  ]
}

export const optionsMotionTransform = {
  status,
  open,
  click,

  options,
  motionTransformAdaptive,
  autoClose,
  animationShow: { default: true },
  bottom
}
