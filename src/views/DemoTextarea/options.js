import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTextarea/props'
import { Field } from '@/media/demo/Field'
import { textarea } from '@/media/demo/data/text'

export const optionsTextarea = useProps(
  props,
  {
    adaptive: Field.carcassFieldAdaptive,
    appearance: Field.carcassFieldAppearance,
    size: Field.carcassFieldSize,
    value: { message: textarea }
  },
  ['icon', 'iconActive', 'iconTrailing']
)
