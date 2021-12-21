import { helper1, validation1 } from '@/media/demo/data/text'

export const Values = {
  dot: {},
  counterValue: { message: 128 },
  element: {
    list: [
      { value: undefined },
      {
        text: 'window',
        value: window
      }
    ]
  },
  helperMessage: { message: helper1 },
  hour: { message: 15 },
  mask: {
    list: [
      { value: undefined },
      { value: '+7 (***) ***-**-**' },
      { value: '**** **** **** ****' }
    ]
  },
  minute: { message: 35 },
  multiple: {},
  prefix: { message: 'pr' },
  second: { message: 45 },
  suffix: { message: 'sf' },
  text: {
    default: true,
    message: 'Interactive demo'
  },
  value: {},
  validationMessage: { message: validation1 }
}
