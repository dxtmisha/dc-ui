import { badge } from '@/media/demo/data/badge'
import { icon } from '@/media/demo/data/icon'
import { maxBadge } from '@/media/demo/data/max'
import { sizeIcon } from '@/media/demo/data/size'

export const Icon = {
  badge: { list: badge },
  badgeMax: { list: maxBadge },
  icon: {
    default: 'lock_open',
    list: icon
  },
  iconActive: {
    default: 'lock',
    list: icon
  },
  iconSize: { list: sizeIcon },

  iconAnimationShow: {},
  iconBackground: {}
}
