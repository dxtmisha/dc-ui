import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DAlert/props'
import { Alert } from '@/media/demo/Alert'

export const optionsAlert = useProps(props, {
  appearance: Alert.alertAppearance,
  border: Alert.alertBorder
})
