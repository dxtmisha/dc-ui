import { adaptiveBasic } from '@/media/demo/data/adaptive'
import { axis } from '@/media/demo/data/axis'

export const Window = {
  windowAdaptive: {
    list: [
      ...adaptiveBasic,
      { value: 'menu' },
      { value: 'modal' },
      { value: 'modal-left' },
      { value: 'modal-right' }
    ]
  },
  windowAxis: {
    list: [
      ...axis,
      { value: 'on' }
    ]
  },
  windowShape: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'rounded' },
      { value: 'tile' }
    ]
  },
  windowSize: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'fullscreen' },
      { value: 'minimum' }
    ]
  },
  windowWidth: {
    list: [
      { value: undefined },
      { value: '0px' },
      { value: '280px' },
      { value: '320px' },
      { value: '400px' },
      { value: '640px' }
    ]
  }
}
