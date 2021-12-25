import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DInput/props'
import { Field } from '@/media/demo/Field'
import { Input } from '@/media/demo/Input'
import { Mask } from '@/media/demo/Mask'

export const optionsInput = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
  size: Field.carcassFieldSize,
  type: Input.inputType,
  value: Mask.maskValue
})
