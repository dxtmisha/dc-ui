import { adaptive } from '@/media/demo/data/adaptive'
import { alignment } from '@/media/demo/data/alignment'
import { axis } from '@/media/demo/data/axis'
import { delay } from '@/media/demo/data/delay'
import { indent } from '@/media/demo/data/indent'
import { locales } from '@/media/demo/data/locales'
import { min } from '@/media/demo/data/min'
import { outline } from '@/media/demo/data/outline'
import { palette } from '@/media/demo/data/palette'
import { shape } from '@/media/demo/data/shape'
import { size } from '@/media/demo/data/size'
import { transition } from '@/media/demo/data/transition'
import { type2i } from '@/media/demo/data/type'

export const Options = {
  adaptive: { list: adaptive },
  alignment: { list: alignment },
  animationHide: { list: type2i },
  axis: { list: axis },
  delay: { list: delay },
  indent: { list: indent },
  indeterminate: {},
  locales: { list: locales },
  max: {},
  min: { list: min },
  outline: { list: outline },
  palette: { list: palette },
  shape: { list: shape },
  size: { list: size },
  type: {},
  transition: { list: transition },
  width: {},

  arrow: {},
  animationShow: {},
  autoClose: {},
  background: {},
  border: {},
  click: {},
  persistent: {},
  scrollHide: {}
}
