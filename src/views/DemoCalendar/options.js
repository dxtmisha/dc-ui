import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DCalendar/props'
import { Calendar } from '@/media/demo/Calendar'

export const optionsCalendar = useProps(
  props,
  {
    adaptive: Calendar.calendarAdaptive,
    max: Calendar.calendarMax,
    min: Calendar.calendarMin,
    value: Calendar.calendarValue
  },
  ['selected']
)
