import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DCarcassField/props'
import { CarcassField } from '@/media/demo/CarcassField'

export const optionsCarcassField = useProps(props, {
  adaptive: CarcassField.carcassFieldAdaptive,
  appearance: CarcassField.carcassFieldAppearance,
  size: CarcassField.carcassFieldSize
}, ['active', 'filled'])
