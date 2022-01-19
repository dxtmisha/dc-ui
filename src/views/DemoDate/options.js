import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDate/props'
import { Calendar } from '@/media/demo/Calendar'
import { Field } from '@/media/demo/Field'

export const optionsDate = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
  max: Calendar.calendarMax,
  min: Calendar.calendarMin,
  size: Field.carcassFieldSize,
  value: Calendar.calendarValue
}, ['icon', 'iconActive'])
