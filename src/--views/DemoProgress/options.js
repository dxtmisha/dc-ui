import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/--components/DProgress/props'
import { Progress } from '@/media/--demo/attrs'

export const optionsProgress = useProps(props, {
  value: Progress.progressValue,
  indeterminate: Progress.progressIndeterminate,
  max: Progress.progressMax,
  type: Progress.progressType
})
