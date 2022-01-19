import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DMotionTransform/props'
import { MotionTransform } from '@/media/demo/MotionTransform'

export const optionsMotionTransform = useProps(props, {
  adaptive: MotionTransform.motionTransformAdaptive
})
