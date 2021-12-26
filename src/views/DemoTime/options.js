import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DTime/props'
import { Field } from '@/media/demo/Field'

export const optionsTime = useProps(props, {
  adaptive: Field.carcassFieldAdaptive,
  appearance: Field.carcassFieldAppearance,
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
  size: Field.carcassFieldSize,
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
