import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DPagination/props'

export const optionsPagination = useProps(props, {
  count: {
    default: 315,
    list: [
      { value: undefined },
      { value: 115 },
      { value: 215 },
      { value: 315 },
      { value: 415 },
      { value: 515 },
      { value: 815 }
    ]
  },
  length: {
    list: [
      { value: undefined },
      { value: 3 },
      { value: 5 },
      { value: 7 },
      { value: 9 }
    ]
  },
  menu: {
    message: [
      { value: undefined },
      { value: 25 },
      { value: 50 },
      { value: 75 },
      { value: 100 }
    ]
  }
}, ['value'])
