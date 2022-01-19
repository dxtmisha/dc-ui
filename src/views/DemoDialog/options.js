import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDialog/props'

export const optionsDialog = useProps(props, {
  windowAdaptive: {
    list: [
      { value: undefined },
      { value: 'modal' },
      { value: 'modal-left' },
      { value: 'modal-right' }
    ]
  }
}, ['bar', 'barAction'])
