import { Icon } from '@/media/demo/Icon'
import { Options } from '@/media/demo/Options'

export const Item = {
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
  itemShape: Options.shape,
  itemSize: Icon.iconSize,
  itemAdaptive: Options.adaptive
}
