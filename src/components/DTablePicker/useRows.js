import { computed, toRefs } from 'vue'
import useWatch from './../../uses/useWatch'

export default function useRows (props, propItems, context) {
  const {
    rows,
    page
  } = toRefs(props)

  const propPage = useWatch(page, () => page.value || 1, ['init'])
  const propRows = useWatch(rows, () => rows.value, ['init'])
  const propMore = useWatch([page, propRows], () => 1, ['init'])
  const propItemsByPage = computed(() => {
    const start = (propPage.value - propMore.value) * propRows.value
    return propItems.value.slice(start, start + (propRows.value * propMore.value))
  })

  const onPage = ({ value }) => {
    propMore.value = 1
    propPage.value = value
    context.emit('on-page', { page: propPage.value })
  }
  const onMore = ({ value }) => {
    propMore.value++
    propPage.value = value
    context.emit('on-page', { page: propPage.value })
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
