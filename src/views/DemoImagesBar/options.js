import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DImagesBar/props'

export const optionsImagesBar = useProps(props, {
  display: {
    list: [
      { value: undefined },
      { value: 'below' },
      { value: 'above' }
    ]
  }
}, ['value'])
