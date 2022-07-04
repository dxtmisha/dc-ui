import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DMask/props'
import { Mask } from '@/media/demo/Mask'

export const optionsMask = useProps(props, {
  min: {
    list: [
      { value: undefined },
      { value: '2020-01-01' },
      { value: '2020-06-01' },
      { value: '2020-06-15' },
      { value: '2019-01-01' },
      { value: '2018-01-01' }
    ]
  },
  max: {
    list: [
      { value: undefined },
      { value: '2023-01-01' },
      { value: '2023-06-01' },
      { value: '2023-06-15' },
      { value: '2024-01-01' },
      { value: '2025-01-01' }
    ]
  },
  type: Mask.maskType,
  value: Mask.maskValue
})
