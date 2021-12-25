import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DMask/props'
import { Mask } from '@/media/demo/Mask'

export const optionsMask = useProps(props, {
  type: Mask.maskType,
  value: Mask.maskValue
})
