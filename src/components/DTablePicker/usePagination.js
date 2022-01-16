import attrPagination from '@/components/DPagination/attrPagination'

export default function usePagination (
  props,
  value,
  count,
  rows
) {
  return attrPagination({
    props,
    items: {
      value,
      count,
      rows
    }
  })
}
