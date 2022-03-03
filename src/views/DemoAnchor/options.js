import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DAnchor/props'

export const optionsAnchor = useProps(props, {
  block: {
    list: [
      { value: undefined },
      { value: 'start' },
      { value: 'center' },
      { value: 'end' },
      { value: 'nearest' }
    ]
  },
  inline: {
    list: [
      { value: undefined },
      { value: 'start' },
      { value: 'center' },
      { value: 'end' },
      { value: 'nearest' }
    ]
  }
}, ['name', 'text'])
