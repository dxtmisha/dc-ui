import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DButtonSelect/props'
import { Button } from '@/media/demo/Button'
import { Icon } from '@/media/demo/Icon'

export const optionsButtonSelect = useProps(props, {
  appearance: Button.buttonAppearance,
  menuSize: Icon.iconSize,
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
