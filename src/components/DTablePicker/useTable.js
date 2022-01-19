import attrTable from './../DTable/attrTable'
import useHeaders from './../DTable/useHeaders'
import { computed } from 'vue'

export default function useTable (
  props,
  propItemsByPage,
  propSort,
  propDest
) {
  const propHeaders = useHeaders(props)

  return attrTable({
    props,
    items: {
      headers: propHeaders,
      items: propItemsByPage,
      sort: propSort,
      dest: computed(() => propDest !== 1)
    },
    attrs: {
      readonly: true
    }
  })
}
