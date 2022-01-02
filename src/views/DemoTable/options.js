import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DTable/props'
import { tableHeaders, tableItems } from '@/media/demo/data/list'

export const optionsTable = useProps(props, {
  headers: {
    default: true,
    message: tableHeaders
  },
  items: {
    default: true,
    message: tableItems()
  }
})
