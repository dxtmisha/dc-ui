import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DAvatar/props'

export const optionsAvatar = useProps(props, {
  value: {
    default: true,
    message: {
      file: require('@/assets/images/image-01.jpeg'),
      zoom: 200,
      x: 25,
      y: 25
    }
  },
  width: {
    list: [
      { value: undefined },
      { value: '160px' },
      { value: '240px' },
      { value: '280px' },
      { value: '320px' },
      { value: '400px' }
    ]
  },
  height: {
    list: [
      { value: undefined },
      { value: '160px' },
      { value: '240px' },
      { value: '280px' },
      { value: '320px' },
      { value: '400px' }
    ]
  }
})
