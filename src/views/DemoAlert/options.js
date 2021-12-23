import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DAlert/props'
import { Alert } from '@/media/demo/Alert'
import { Icon } from '@/media/demo/Icon'

export const optionsAlert = useProps(props, {
  appearance: Alert.alertAppearance,
  border: Alert.alertBorder,
  size: Icon.iconSize
})
