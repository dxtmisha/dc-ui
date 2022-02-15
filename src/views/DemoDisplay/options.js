import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDisplay/props'

export const optionsDisplay = useProps(props, {
  display: {
    list: [
      { value: undefined },
      { value: 'narrow' },
      { value: 'short' },
      { value: 'long' }
    ]
  },
  type: {
    list: [
      { value: undefined },
      { value: 'calendar' },
      { value: 'currency' },
      { value: 'language' },
      { value: 'region' }
    ]
  }
})
