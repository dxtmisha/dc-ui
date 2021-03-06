import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DClipboard/props'

export const optionsClipboard = useProps(props, {
  value: {
    default: true,
    message: 'Interactive demo'
  }
})
