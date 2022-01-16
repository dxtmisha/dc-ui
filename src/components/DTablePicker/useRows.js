import { computed, toRefs } from 'vue'
import useWatch from '@/uses/useWatch'

export default function useRows (props, propItems) {
  const {
    rows,
    page
  } = toRefs(props)

  const propPage = useWatch(page, () => page.value || 1, ['init'])
  const propRows = useWatch(rows, () => rows.value, ['init'])
  const propMore = useWatch([propPage, propRows], () => 1, ['init'])
  const propItemsByPage = computed(() => {
    const start = (propPage.value - 1) * propRows.value
    return propItems.value.slice(start, start + (propRows.value * propMore.value))
  })

  const onPage = ({ value }) => {
    propPage.value = value
  }

  const onMore = () => {
    propMore.value++
  }
  const onRows = ({ value }) => {
    propRows.value = value
  }

  return {
    propPage,
    propRows,
    propItemsByPage,
    onPage,
    onMore,
    onRows
  }
}
