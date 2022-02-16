import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DUnit/props'

export const optionsUnit = useProps(props, {
  display: {
    group: 'Options',
    list: [
      { value: undefined },
      { value: 'narrow' },
      { value: 'short' },
      { value: 'long' }
    ]
  }
}, ['value', 'options'])
