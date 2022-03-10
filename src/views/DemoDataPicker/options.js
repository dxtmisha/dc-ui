import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDataPicker/props'
import { DataItem } from '@/media/demo/DataItem'
import { Icon } from '@/media/demo/Icon'
import { tableItems } from '@/media/demo/data/list'

export const optionsDataPicker = useProps(props, {
  listNew: {
    message: tableItems(4, 10)
  },
  ajax: { message: 'demo/request/data.json' },
  adaptive: DataItem.dataItemAdaptive,
  appearance: DataItem.dataItemAppearance,
  headers: {
    message: {
      name: 'Name',
      city: 'City',
      policy: 'Policy'
    }
  },
  size: Icon.iconSize
}, ['list', 'icon'])
