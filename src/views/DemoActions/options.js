import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DActions/props'
import { Actions } from '@/media/demo/Actions'

export const optionsActions = useProps(props, {
  align: Actions.actionsAlign
}, ['bar'])
