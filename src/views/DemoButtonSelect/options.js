import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DButtonSelect/props'
import { Button } from '@/media/demo/Button'
import { Icon } from '@/media/demo/Icon'
import { Select } from '@/media/demo/Select'

export const optionsButtonSelect = useProps(props, {
  appearance: Button.buttonAppearance,
  menuSize: Icon.iconSize,
  type: Select.selectType,
  value: { message: 'home' }
})
