import {
  options,
  status
} from '@/media/--demo/options'

export const motionAxisSelected = {
  value: 'selected',
  list: [
    { value: undefined },
    { value: 'slide2' },
    { value: 'slide3' },
    { value: 'slide4' },
    { value: 'slide6' }
  ]
}

export const motionAxisAxis = {
  value: 'axis',
  list: [
    { value: undefined },
    { value: 'x' },
    { value: 'y' },
    { value: 'z' }
  ]
}

export const motionAxisTransition = {
  value: 'transition',
  list: [
    { value: undefined },
    { value: 'next' },
    { value: 'back' }
  ]
}

export const optionsMotionAxis = {
  status,
  motionAxisSelected,

  options,
  motionAxisAxis,
  motionAxisTransition
}
