import attrData from '@/components/DData/attrData'

export default function useData (props, items) {
  return attrData({
    props,
    items: { items }
  })
}
