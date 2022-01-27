import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDateFormat/props'

export const optionsDateFormat = useProps(props, {
  type: {
    list: [
      { value: undefined },
      { value: 'date' },
      { value: 'datetime' },
      { value: 'time' },
      { value: 'time-full' },
      { value: 'relative' }
    ]
  },
  display: {
    list: [
      { value: undefined },
      { value: 'numeric' },
      { value: 'long' },
      { value: 'short' },
      { value: 'narrow' },
      { value: '2-digit' }
    ]
  }
}, ['value', 'options'])
