import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DSkeleton/props'

export const optionsSkeleton = useProps(props, {
  appearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'wave' }
    ]
  }
})
