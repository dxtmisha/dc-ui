import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DSelectFilter/props'
import { Icon } from '@/media/demo/Icon'
import { Select } from '@/media/demo/Select'

export const optionsSelectFilter = useProps(props, {
  menuSize: Icon.iconSize,
  type: Select.selectType,
  value: { message: 'home' }
}, ['list'])
