import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDataItem/props'
import { DataItem } from '@/media/demo/DataItem'
import { Icon } from '@/media/demo/Icon'

export const optionsDataItem = useProps(props, {
  adaptive: DataItem.dataItemAdaptive,
  appearance: DataItem.dataItemAppearance,
  size: {
    list: [
      ...Icon.iconSize.list,
      { value: 'header' }
    ]
  }
}, ['value'])
