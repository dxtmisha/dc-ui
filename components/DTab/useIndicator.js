import { toRefs } from 'vue'
import useWatch from '../../uses/useWatch'

export default function useIndicator (tab, props) {
  const { selected } = toRefs(props)

  let old

  return useWatch(selected, data => {
    const item = tab.value?.querySelector(`[data-value=${selected.value}]`)

    if (item && old) {
      const rect = old.getBoundingClientRect()
      const rectItem = item.getBoundingClientRect()

      item.style.setProperty('--tb__in-left', rect.left - rectItem.left + 'px')
      item.style.setProperty('--tb__in-width', rect.width + 'px')
    }

    old = item

    requestAnimationFrame(() => {
      data.value = selected.value
    })
  }, ['mounted'])
}
