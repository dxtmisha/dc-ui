import { alignment } from '@/media/demo/data/alignment'
import { outline } from '@/media/demo/data/outline'
import { palette } from '@/media/demo/data/palette'
import { shape } from '@/media/demo/data/shape'
import { size } from '@/media/demo/data/size'
import { type2i } from '@/media/demo/data/type'

export const Options = {
  alignment: { list: alignment },
  animationHide: { list: type2i },
  outline: { list: outline },
  palette: { list: palette },
  shape: { list: shape },
  size: { list: size },

  animationShow: {},
  background: {}
}
