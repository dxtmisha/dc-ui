import { element } from '@/media/demo/data/element'
import { mask } from '@/media/demo/data/mask'

export const Values = {
  element: { list: element },
  mask: {
    default: '**** ****',
    list: mask
  },
  value: {},

  dot: {},
  hour: { message: 15 },
  minute: { message: 35 },
  second: { message: 45 },
  text: {
    default: true,
    message: 'Interactive demo'
  }
}
