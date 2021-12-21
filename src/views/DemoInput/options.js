import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DInput/props'
import { CarcassField } from '@/media/demo/CarcassField'
import { Input } from '@/media/demo/Input'
import { Mask } from '@/media/demo/Mask'

export const optionsInput = useProps(props, {
  adaptive: CarcassField.carcassFieldAdaptive,
  appearance: CarcassField.carcassFieldAppearance,
  size: CarcassField.carcassFieldSize,
  type: Input.inputType,
  value: Mask.maskValue
})
