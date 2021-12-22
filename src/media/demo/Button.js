import { Options } from '@/media/demo/Options'
import { Icon } from '@/media/demo/Icon'

export const Button = {
  buttonAdaptive: Options.adaptive,
  buttonAlign: Options.align,
  buttonIconBackground: Icon.iconBackground,
  buttonShape: Options.shape,
  buttonSize: Options.size,
  buttonAppearance: {
    list: [
      { value: undefined },
      { value: 'text' },
      { value: 'text-color' },
      { value: 'outlined' },
      { value: 'outlined-color' },
      { value: 'outlined-contained' },
      { value: 'contained' },
      { value: 'fab' },
      { value: 'chip' },
      { value: 'chip-color' },
      { value: 'chip-outlined' }
    ]
  }
}
