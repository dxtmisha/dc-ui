import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DFile/props'
import { Field } from '@/media/demo/Field'

export const optionsFile = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  value: {
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
})
