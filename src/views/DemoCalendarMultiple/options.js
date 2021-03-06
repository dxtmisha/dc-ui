import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DCalendarMultiple/props'
import { Calendar } from '@/media/demo/Calendar'

export const optionsCalendarMultiple = useProps(props, {
  max: Calendar.calendarMax,
  min: Calendar.calendarMin,
  value: Calendar.calendarValue
})
