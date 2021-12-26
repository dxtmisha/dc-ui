import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DCalendarSelect/props'
import { Calendar } from '@/media/demo/Calendar'

export const optionsCalendarSelect = useProps(props, {
  max: Calendar.calendarMax,
  min: Calendar.calendarMin,
  value: Calendar.calendarValue
})
