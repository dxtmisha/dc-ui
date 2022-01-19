import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTab/props'

export const optionsTab = useProps(props, {
  appearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'contained' }
    ]
  }
}, ['selected'])
