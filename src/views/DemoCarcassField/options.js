import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DCarcassField/props'
import { Field } from '@/media/demo/Field'

export const optionsCarcassField = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
  size: Field.carcassFieldSize
}, ['active', 'filled'])
