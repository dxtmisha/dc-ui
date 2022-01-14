import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DSelect/props'
import { Icon } from '@/media/demo/Icon'
import { Select } from '@/media/demo/Select'

export const optionsSelect = useProps(props, {
  menuSize: Icon.iconSize,
  type: Select.selectType,
  value: { message: 'home' }
})
