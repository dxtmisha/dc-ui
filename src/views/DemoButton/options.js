import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DButton/props'
import { Button } from '@/media/demo/Button'

export const optionsButton = useProps(
  props,
  {
    appearance: Button.buttonAppearance
  },
  ['value']
)
