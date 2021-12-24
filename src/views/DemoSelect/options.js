import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/--components/DSelect/props'

export const optionsSelect = useProps(props, {
  type: {
    list: [
      { value: undefined },
      { value: 'select' },
      { value: 'month' },
      { value: 'week' }
    ]
  },
  value: { message: 'home' }
})
