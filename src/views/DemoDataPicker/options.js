import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DDataPicker/props'
import { DataItem } from '@/media/demo/DataItem'
import { Icon } from '@/media/demo/Icon'

export const optionsDataPicker = useProps(props, {
  ajax: { message: 'demo/request/data.json' },
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
  size: Icon.iconSize
}, ['list'])
