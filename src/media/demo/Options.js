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
  aspectRatio: {
    list: [
      { value: undefined },
      { value: '1/1' },
      { value: '3/2' },
      { value: '4/3' },
      { value: '16/9' }
    ]
  },
  autoClose: {},
  axis: { list: axis },
  back: {},
  background: {},
  behavior: {
    list: [
      { value: undefined },
      { value: 'auto' },
      { value: 'smooth' }
    ]
  },
  block: {},
  border: {},
  borderInverse: {},
  cancel: { default: true },
  cancelShowAlways: {},
  checkbox: {},
  click: {},
  close: {},
  colored: {},
  copy: {},
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
  display: {},
  dynamic: {},
  ellipsis: {},
  format: {},
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
  inline: {},
  interspace: {
    list: [
      { value: undefined },
      { value: 0 },
      { value: 160 },
      { value: 240 },
      { value: 320 },
      { value: 400 }
    ]
  },
  isNew: {},
  height: {},
  hideAfter: {
    list: [
      { value: undefined },
      { value: 3000 },
      { value: 6000 },
      { value: 12000 }
    ]
  },
  hideIfOne: {},
  gap: {
    list: [
      { value: undefined },
      { value: '0px' },
      { value: '4px' },
      { value: '8px' },
      { value: '12px' },
      { value: '16px' }
    ]
  },
  landscape: {},
  length: {},
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
  magnet: {},
  navigation: {},
  navigationRail: {
    list: [
      { value: undefined },
      { value: 'small' },
      { value: 'medium' },
      { value: 'medium-medium' },
      { value: 'medium-large' },
      { value: 'medium-extra' },
      { value: 'medium-desktop' },
      { value: 'large' },
      { value: 'large-large' },
      { value: 'large-extra' },
      { value: 'large-desktop' },
      { value: 'extra' },
      { value: 'desktop' },
      { value: 'always' }
    ]
  },
  numeric: {
    list: [
      { value: undefined },
      { value: 'always' },
      { value: 'auto' }
    ]
  },
  options: {},
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
  ripple: { default: true },
  scroll: {},
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
  shift: {
    list: [
      { value: undefined },
      { value: 32 },
      { value: 64 },
      { value: 128 },
      { value: 256 }
    ]
  },
  showText: {},
  showInfo: {},
  showMore: {},
  size: {
    list: [
      { value: undefined },
      { value: 'small' },
      { value: 'medium' },
      { value: 'large' }
    ]
  },
  src: {
    list: [
      { value: undefined },
      {
        text: 'image 01',
        icon: require('@/assets/images/thumbnails/image-01-icon.jpeg'),
        value: require('@/assets/images/image-01.jpeg')
      },
      {
        text: 'image 02',
        icon: require('@/assets/images/thumbnails/image-02-icon.jpeg'),
        value: require('@/assets/images/image-02.jpeg')
      },
      {
        text: 'image 03',
        icon: require('@/assets/images/thumbnails/image-03-icon.jpeg'),
        value: require('@/assets/images/image-03.jpeg')
      },
      {
        text: 'image 04',
        icon: require('@/assets/images/thumbnails/image-04-icon.jpeg'),
        value: require('@/assets/images/image-04.jpeg')
      },
      {
        text: 'image 05',
        icon: require('@/assets/images/thumbnails/image-05-icon.jpeg'),
        value: require('@/assets/images/image-05.jpeg')
      }
    ]
  },
  sticky: {},
  timeout: {
    list: [
      { value: undefined },
      { value: 0 },
      { value: 2000 },
      { value: 4000 },
      { value: 8000 }
    ]
  },
  type: {},
  transform: {
    list: [
      { value: undefined },
      {
        text: '0',
        value: 0
      },
      { value: 32 },
      { value: 64 },
      { value: 128 },
      { value: 256 }
    ]
  },
  transition: {
    list: [
      { value: 'next' },
      { value: 'back' }
    ]
  },
  today: { default: true },
  topShow: {},
  unit: {
    default: 'kilogram',
    list: [
      { value: undefined },
      { value: 'square-kilometer' },
      { value: 'byte' },
      { value: 'kilojoule' },
      { value: 'kilometer' },
      { value: 'kilogram' }
    ]
  },
  width: {},
  vertical: {}
}
