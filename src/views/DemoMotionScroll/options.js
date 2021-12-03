import { options, scrollHide } from '@/media/demo/options'

export const motionScrollElement = {
  value: 'element',
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
