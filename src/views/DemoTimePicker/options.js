import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTimePicker/props'

export const optionsTimePicker = useProps(props, {
  format: {
    list: [
      { value: undefined },
      { value: 'auto' },
      { value: '12' },
      { value: '24' }
    ]
  },
  max: { message: '19:00' },
  min: { message: '10:00' },
  value: {
    list: [
      { value: undefined },
      { value: '08:05' },
      { value: '16:33' },
      { value: '2020-08-19 05:04' },
      { value: '99:99' }
    ]
  }
})
