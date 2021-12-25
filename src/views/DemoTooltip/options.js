import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/--components/DTooltip/props'
import { Tooltip } from '@/media/demo/Tooltip'

export const optionsTooltip = useProps(props, {
  width: Tooltip.tooltipWidth
})
