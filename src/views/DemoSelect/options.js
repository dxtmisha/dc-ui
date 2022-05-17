import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DSelect/props'
import { Icon } from '@/media/demo/Icon'
import { Select } from '@/media/demo/Select'
import { Field } from '@/media/demo/Field'

export const optionsSelect = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
  menuSize: Icon.iconSize,
  size: Field.carcassFieldSize,
  type: Select.selectType,
  value: { message: 'home' }
})
