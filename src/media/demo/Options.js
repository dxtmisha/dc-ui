import { adaptive } from '@/media/demo/data/adaptive'
import { axis } from '@/media/demo/data/axis'
import { type2i } from '@/media/demo/data/type'

export const Options = {
  adaptive: { list: adaptive },
  align: {
    list: [
      { value: undefined },
      { value: 'center' },
      { value: 'left' },
      { value: 'right' }
    ]
  },
  alignment: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'overlap' },
      { value: 'static' }
    ]
  },
  animationHide: { list: type2i },
  animationShow: {},
  arrow: {},
  appearance: {},
  autoClose: {},
  axis: { list: axis },
  background: {},
  border: {},
  cancel: {},
  click: {},
  counter: {},
  delay: {
    list: [
      { value: undefined },
      {
        text: '0s',
        value: 0
      },
      {
        text: '40s',
        value: 40
      },
      {
        text: '160s',
        value: 160
      },
      {
        text: '400s',
        value: 400
      },
      {
        text: '800s',
        value: 800
      },
      {
        text: '1600s',
        value: 1600
      },
      {
        text: '3200s',
        value: 3200
      }
    ]
  },
  dense: {},
  ellipsis: {},
  indent: {
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
  },
  indeterminate: {},
  inDom: {},
  locales: {
    list: [
      { value: undefined },
      { value: 'en-US' },
      { value: 'en-GB' },
      { value: 'en-AU' },
      { value: 'de-DE' },
      { value: 'ko-KR' },
      { value: 'he-IL' },
      { value: 'ru-RU' }
    ]
  },
  lowercase: {},
  outline: {
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
  },
  outputDay: {},
  outputMonth: {},
  outputWeek: {},
  palette: {
    list: [
      { value: undefined },
      {
        value: 'basic',
        icon: '#607d8b'
      },
      {
        value: 'primary',
        icon: '#42a5f5'
      },
      {
        value: 'secondary',
        icon: '#3f51b5'
      },
      {
        value: 'tertiary',
        icon: '#3f51b5'
      },
      {
        value: 'success',
        icon: '#4caf50'
      },
      {
        value: 'info',
        icon: '#03a9f4'
      },
      {
        value: 'warning',
        icon: '#ffc107'
      },
      {
        value: 'error',
        icon: '#f44336'
      },
      {
        value: 'disabled',
        icon: '#9e9e9e'
      }
    ]
  },
  persistent: {},
  ripple: {},
  scrollHide: {},
  shape: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'rounded' },
      { value: 'pill' },
      { value: 'tile' }
    ]
  },
  size: {
    list: [
      { value: undefined },
      { value: 'small' },
      { value: 'medium' },
      { value: 'large' }
    ]
  },
  type: {},
  transition: {
    list: [
      { value: 'next' },
      { value: 'back' }
    ]
  },
  today: {},
  width: {}
}
