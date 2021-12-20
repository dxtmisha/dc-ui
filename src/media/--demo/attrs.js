import { adaptive } from '@/media/--demo/data/adaptive'
import { align } from '@/media/--demo/data/align'
import { alignment } from '@/media/--demo/data/alignment'
import { appearanceButton } from '@/media/--demo/data/appearance'
import { badge } from '@/media/--demo/data/badge'
import { delay } from '@/media/--demo/data/delay'
import { icon } from '@/media/demo/data/icon'
import { indeterminateProgress } from '@/media/--demo/data/indeterminate'
import { maxBadge, maxProgress } from '@/media/--demo/data/max'
import { outline } from '@/media/--demo/data/outline'
import { palette } from '@/media/--demo/data/palette'
import { shape } from '@/media/--demo/data/shape'
import { size, sizeIcon } from '@/media/--demo/data/size'
import { typeProgress } from '@/media/--demo/data/type'
import { valueProgress } from '@/media/--demo/data/value'

export const Values = {
  value: {},

  dot: {},
  text: {
    default: true,
    message: 'Interactive demo'
  }
}

export const Status = {
  active: {},
  disabled: {},
  dragged: {},
  hide: {},
  readonly: {},
  selected: {},
  turn: {},
  visible: {}
}

export const Options = {
  adaptive: { list: adaptive },
  align: { list: align },
  alignment: { list: alignment },
  appearance: {},
  delay: { list: delay },
  indeterminate: {},
  max: {},
  outline: { list: outline },
  palette: { list: palette },
  shape: { list: shape },
  size: { list: size },
  type: {},

  dense: {},
  ellipsis: {},
  lowercase: {},
  ripple: {}
}

export const Position = {
  bottom: {},
  left: {}
}

export const Button = {
  buttonAppearance: { list: appearanceButton }
}

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

export const Progress = {
  progressValue: { list: valueProgress },

  progressIndeterminate: { list: indeterminateProgress },
  progressMax: { list: maxProgress },
  progressType: { list: typeProgress },

  progress: {}
}

export default {
  Values,
  Status,
  Options,
  Position,
  Button,
  Icon,
  Progress
}
