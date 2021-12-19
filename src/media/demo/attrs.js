import { align } from '@/media/demo/data/align'
import { alignment } from '@/media/demo/data/alignment'
import { badge } from '@/media/demo/data/badge'
import { outline } from '@/media/demo/data/outline'
import { palette } from '@/media/demo/data/palette'
import { shape } from '@/media/demo/data/shape'
import { size } from '@/media/demo/data/size'
import { adaptive } from '@/media/demo/data/adaptive'
import { icon } from '@/media/demo/data/icon'

export default {
  Values: {
    dot: {},
    text: {
      default: true,
      message: 'Interactive demo'
    }
  },
  Status: {
    active: {},
    disabled: {},
    dragged: {},
    hide: {},
    progress: {},
    readonly: {},
    selected: {},
    turn: {}
  },
  Options: {
    adaptive: { list: adaptive },
    align: { list: align },
    alignment: { list: alignment },
    appearance: {},
    max: {},
    outline: { list: outline },
    palette: { list: palette },
    shape: { list: shape },
    size: { list: size },

    dense: {},
    ellipsis: {},
    lowercase: {},
    ripple: {}
  },
  Position: {
    bottom: {},
    left: {}
  },
  Icon: {
    badge: { list: badge },
    icon: {
      default: 'lock_open',
      list: icon
    },
    iconActive: {
      default: 'lock',
      list: icon
    },
    iconTrailing: {
      default: 'arrow_drop_down',
      list: icon
    },

    iconHide: {},
    iconReadonly: {},
    iconTurn: {},

    iconAnimationShow: {},
    iconBackground: {}
  }
}
