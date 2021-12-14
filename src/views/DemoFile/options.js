import { iconSize } from '@/views/DemoIcon/options'
import {
  accept,
  disabled,
  helperMessage, max, optionInput, options, palette,
  readonly, required,
  selected, shape,
  status,
  text,
  validationMessage,
  values
} from '@/media/demo/options'

export const fileValue = {
  value: 'value',
  message: [
    {
      text: 'image-01',
      value: 'image-01',
      thumbnail: require('@/assets/images/image-01.jpeg')
    },
    {
      text: 'image-02',
      value: 'image-02',
      thumbnail: require('@/assets/images/image-02.jpeg')
    },
    {
      text: 'image-03',
      value: 'image-03',
      thumbnail: require('@/assets/images/image-03.jpeg')
    },
    {
      text: 'image-04',
      value: 'image-04',
      thumbnail: require('@/assets/images/image-04.jpeg')
    },
    {
      text: 'image-05',
      value: 'image-05',
      thumbnail: require('@/assets/images/image-05.jpeg')
    },
    {
      text: 'image-06',
      value: 'image-06',
      thumbnail: require('@/assets/images/image-06.jpeg')
    }
  ]
}

export const fileAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'full' },
    { value: 'block' }
  ]
}

export const optionsFile = {
  values,
  fileValue,
  text,
  helperMessage,
  validationMessage,

  status,
  selected,
  readonly,
  disabled,

  optionInput,
  accept,
  max,
  required,

  options,
  palette,
  fileAdaptive,
  iconSize,
  shape
}
