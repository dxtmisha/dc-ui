import { Options } from '@/media/demo/Options'
import { Icon } from '@/media/demo/Icon'

export const Button = {
  buttonAdaptive: Options.adaptive,
  buttonAlign: Options.align,
  buttonDense: Options.dense,
  buttonIconBackground: Icon.iconBackground,
  buttonLowercase: Options.lowercase,
  buttonPalette: Options.palette,
  buttonRipple: Options.ripple,
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
      { value: 'filled' },
      { value: 'contained' },
      { value: 'elevated' },
      { value: 'fab' },
      { value: 'chip' },
      { value: 'chip-color' },
      { value: 'chip-outlined' }
    ]
  }
}
