import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DData/props'
import { DataItem } from '@/media/demo/DataItem'
import { Icon } from '@/media/demo/Icon'

export const optionsData = useProps(props, {
  adaptive: DataItem.dataItemAdaptive,
  appearance: DataItem.dataItemAppearance,
  size: Icon.iconSize,
  selected: {
    list: [
      { value: undefined },
      { value: 10001 },
      { value: 10002 },
      { value: 10003 },
      { value: 10004 },
      { value: [10005, 10006, 10007] }
    ]
  }
}, ['items', 'value', 'underline', ''])
