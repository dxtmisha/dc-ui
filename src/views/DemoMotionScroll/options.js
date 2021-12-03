import { options, scrollHide } from '@/media/demo/options'

export const motionScrollElement = {
  value: 'element',
  default: window,
  list: [
    { value: undefined },
    { value: window }
  ]
}

export const optionsMotionScroll = {
  options,
  motionScrollElement,
  scrollHide
}
