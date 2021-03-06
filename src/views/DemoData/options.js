import useProps from '@/components/InteractiveDemo/useProps'
import { tableItems } from '@/media/demo/data/list'
import { props } from '../../../components/DData/props'
import { DataItem } from '@/media/demo/DataItem'
import { Icon } from '@/media/demo/Icon'

export const optionsData = useProps(props, {
  itemsNew: {
    message: tableItems(4, 10)
  },
  adaptive: DataItem.dataItemAdaptive,
  appearance: DataItem.dataItemAppearance,
  headers: {
    message: {
      icon: ' ',
      name: 'Name',
      city: 'City',
      policy: 'Policy'
    }
  },
  open: {
    list: [
      { value: undefined },
      { value: 10001 },
      { value: 10002 },
      { value: 10003 },
      { value: 10004 },
      { value: [10005, 10006, 10007] }
    ]
  },
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
}, ['items', 'value'])
