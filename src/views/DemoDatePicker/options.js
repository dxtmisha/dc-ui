import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DDatePicker/props'
import { Calendar } from '@/media/demo/Calendar'

export const optionsDatePicker = useProps(props, {
  max: Calendar.calendarMax,
  min: Calendar.calendarMin,
  value: Calendar.calendarValue
})
