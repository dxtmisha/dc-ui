import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DImages/props'

export const optionsImages = useProps(props, {
  appearance: {
    list: [
      { value: undefined },
      { value: 'standard' },
      { value: 'quilted' },
      { value: 'woven' },
      { value: 'masonry-horizontal' },
      { value: 'masonry-vertical' }
    ]
  },
  list: {
    default: true,
    message: [
      {
        src: require('@/assets/images/image-01.jpeg'),
        value: 'image-01'
      },
      {
        src: require('@/assets/images/image-02.jpeg'),
        value: 'image-02',
        emphasize: 4
      },
      {
        src: require('@/assets/images/image-03.jpeg'),
        value: 'image-03'
      },
      {
        src: require('@/assets/images/image-04.jpeg'),
        value: 'image-04'
      },
      {
        src: require('@/assets/images/image-05.jpeg'),
        value: 'image-05',
        emphasize: 2
      },
      {
        src: require('@/assets/images/image-06.jpeg'),
        value: 'image-06',
        emphasize: 2
      },
      {
        src: require('@/assets/images/image-07.jpeg'),
        value: 'image-07'
      },
      {
        src: require('@/assets/images/image-08.jpeg'),
        value: 'image-08'
      },
      {
        src: require('@/assets/images/image-09.jpeg'),
        value: 'image-09'
      },
      {
        src: require('@/assets/images/image-10.jpeg'),
        value: 'image-10'
      },
      {
        src: require('@/assets/images/image-11.jpeg'),
        value: 'image-11'
      },
      {
        src: require('@/assets/images/image-12.jpeg'),
        value: 'image-12'
      },
      {
        text: 'Image 13',
        src: require('@/assets/images/image-13.jpg'),
        value: 'image-13'
      },
      {
        text: 'Image 14',
        src: require('@/assets/images/image-14.jpg'),
        value: 'image-14'
      },
      {
        text: 'Image 15',
        src: require('@/assets/images/image-15.jpg'),
        value: 'image-15'
      },
      {
        text: 'Image 16',
        src: require('@/assets/images/image-16.jpg'),
        value: 'image-16'
      },
      {
        text: 'Image 17',
        src: require('@/assets/images/image-17.jpg'),
        value: 'image-17'
      },
      {
        text: 'Image 18',
        src: require('@/assets/images/image-18.jpg'),
        value: 'image-18'
      },
      {
        text: 'Image 19',
        src: require('@/assets/images/image-19.jpg'),
        value: 'image-19'
      },
      {
        text: 'Image 20',
        src: require('@/assets/images/image-20.jpg'),
        value: 'image-20'
      },
      {
        text: 'Image 21',
        src: require('@/assets/images/image-21.jpg'),
        value: 'image-21'
      },
      { value: 'image-22' },
      { value: 'image-23' },
      { value: 'image-24' }
    ]
  }
})
