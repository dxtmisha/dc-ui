import { icon } from '@/media/demo/data/icon'
import { Options } from '@/media/demo/Options'

export const Icon = {
  badge: {
    list: [
      { value: undefined },
      { value: 8 },
      { value: 32 },
      { value: 128 },
      { value: 'Demo' },
      { value: 'Interactive demo' }
    ]
  },
  badgeMax: {
    list: [
      { value: undefined },
      { value: 9 },
      { value: 99 },
      { value: 999 }
    ]
  },
  icon: {
    default: 'lock_open',
    list: icon
  },
  iconActive: {
    default: 'lock',
    list: icon
  },
  iconAnimationShow: Options.animationShow,
  iconBackground: {},
  iconHide: {},
  iconReadonly: {},
  iconSize: {
    list: [
      { value: undefined },
      { value: 'dynamic' },
      { value: 'compact' },
      { value: 'small' },
      { value: 'medium' },
      { value: 'large' },
      { value: 'rectangle' }
    ]
  },
  iconTrailing: {
    default: 'arrow_drop_down',
    list: icon
  },
  iconTurn: {},
  thumbnail: { list: icon }
}
