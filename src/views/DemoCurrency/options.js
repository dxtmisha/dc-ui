import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DCurrency/props'

export const optionsCurrency = useProps(props, {
  currency: {
    group: 'Values',
    list: [
      { value: undefined },
      { value: 'EUR' },
      { value: 'RUB' },
      { value: 'USD' },
      { value: 'VND' }
    ]
  },
  display: {
    group: 'Options',
    list: [
      { value: undefined },
      { value: 'symbol' },
      { value: 'code' },
      { value: 'name' }
    ]
  }
}, ['value', 'options'])
