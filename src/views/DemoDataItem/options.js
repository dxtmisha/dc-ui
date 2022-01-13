import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DDataItem/props'
import { Icon } from '@/media/demo/Icon'

export const optionsDataItem = useProps(props, {
  adaptive: {
    list: [
      { value: undefined },
      { value: 'auto' },
      { value: 'auto-small' },
      { value: 'auto-medium' },
      { value: 'auto-large' },
      { value: 'auto-extra' },
      { value: 'auto-desktop' },
      { value: 'basic' },
      { value: 'minimum' }
    ]
  },
  appearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'color' }
    ]
  },
  size: Icon.iconSize
}, ['value'])
