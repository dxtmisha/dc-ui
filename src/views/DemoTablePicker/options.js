import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTablePicker/props'
import { tableHeaders, tableItems } from '@/media/demo/data/list'
import { Window } from '@/media/demo/Window'

export const optionsTablePicker = useProps(props, {
  headers: {
    default: true,
    message: tableHeaders
  },
  items: {
    default: true,
    message: tableItems(512)
  },
  shape: Window.windowShape
}, ['rows', 'menu'])
