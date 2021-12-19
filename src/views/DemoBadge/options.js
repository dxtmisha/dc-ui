import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DBadge/props'

export const badgeMax = {
  list: [
    { value: undefined },
    { value: 9 },
    { value: 99 },
    { value: 999 }
  ]
}

export const optionsBadge = useProps(props, {
  max: badgeMax
})
