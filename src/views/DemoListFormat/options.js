import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DListFormat/props'

export const optionsListFormat = useProps(props, {
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
      { value: 'conjunction' },
      { value: 'disjunction' },
      { value: 'unit' }
    ]
  }
}, ['value'])
