import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTabPicker/props'

export const optionsTabPicker = useProps(props, {
  appearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'contained' }
    ]
  }
}, ['selected'])
