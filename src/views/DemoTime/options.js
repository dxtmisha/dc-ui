import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DTime/props'
import { Field } from '@/media/demo/Field'
import { Time } from '@/media/demo/Time'

export const optionsTime = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
  format: Time.timeFormat,
  max: Time.timeMax,
  min: Time.timeMin,
  size: Field.carcassFieldSize,
  value: Time.timeValue
})
