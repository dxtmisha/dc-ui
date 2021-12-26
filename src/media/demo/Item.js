import { Icon } from '@/media/demo/Icon'
import { Options } from '@/media/demo/Options'

export const Item = {
  itemAdaptive: Options.adaptive,
  itemAppearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'color' },
      { value: 'contained' },
      { value: 'contained-status' }
    ]
  },
  itemFocus: { message: 'help_and_feedback' },
  itemRipple: Options.ripple,
  itemShape: Options.shape,
  itemSize: Icon.iconSize
}
