import { controlValue } from '@/--views/DemoControlResize/options'
import { disabled, status, text, values } from '@/media/--demo/options'

export const redactionFileThumbnail = {
  value: 'thumbnail',
  default: require('@/assets/images/image-01.jpeg'),
  list: [
    { value: undefined },
    {
      text: 'image-01',
      value: require('@/assets/images/image-01.jpeg')
    },
    {
      text: 'image-02',
      value: require('@/assets/images/image-02.jpeg')
    },
    {
      text: 'image-03',
      value: require('@/assets/images/image-03.jpeg')
    },
    {
      text: 'image-04',
      value: require('@/assets/images/image-04.jpeg')
    },
    {
      text: 'image-05',
      value: require('@/assets/images/image-05.jpeg')
    }
  ]
}

export const optionsRedactionFile = {
  values,
  controlValue,
  redactionFileThumbnail,
  text,

  status,
  disabled
}
