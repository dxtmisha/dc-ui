import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DButtonSort/props'
import { Button } from '@/media/demo/Button'
import { Icon } from '@/media/demo/Icon'
import { Select } from '@/media/demo/Select'

export const optionsButtonSort = useProps(props, {
  appearance: Button.buttonAppearance,
  menuSize: Icon.iconSize,
  type: Select.selectType,
  value: { message: 'date' }
}, ['list'])
