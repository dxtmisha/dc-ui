import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DIcon/props'

export const iconSize = {
  list: [
    { value: undefined },
    { value: 'dynamic' },
    { value: 'compact' },
    { value: 'small' },
    { value: 'medium' },
    { value: 'large' },
    { value: 'rectangle' }
  ]
}

export const optionsIcon = useProps(props, {
  size: iconSize
})
