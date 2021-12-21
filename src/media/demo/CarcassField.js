import { Options } from '@/media/demo/Options'

export const CarcassField = {
  carcassFieldAdaptive: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'block' }
    ]
  },
  carcassFieldAlign: Options.align,
  carcassFieldAppearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'classic' },
      { value: 'filled' },
      { value: 'outlined' }
    ]
  },
  carcassFieldArrow: Options.arrow,
  carcassFieldShape: Options.shape,
  carcassFieldSize: {
    list: [
      { value: undefined },
      { value: 'dense' },
      { value: 'small' },
      { value: 'medium' },
      { value: 'large' },
      { value: 'interactive-display' }
    ]
  }
}
