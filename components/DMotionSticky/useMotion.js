import { nextTick, onMounted, onUpdated, ref } from 'vue'

export default function useMotion (
  id,
  sticky,
  props,
  propElement,
  onScroll
) {
  const items = ref(undefined)

  const update = () => {
    items.value = document.querySelectorAll(`.${id}`)
  }

  onScroll.value = (event = undefined) => {
    if (
      event &&
      event.$element !== propElement.value &&
      event.$element !== props.element
    ) {
      event.$event.stop()
    } else if (items.value) {
      const rect = propElement.value.getBoundingClientRect()
      items.value.forEach(item => {
        const itemRect = item.getBoundingClientRect()
        const style = getComputedStyle(item)
        const isTop = parseInt(style.top.replace(/[^0-9]/ig, '')) || 0
        const isTopItem = Math.round(itemRect.top - (rect.top > 0 ? rect.top : 0))
        const isBottom = parseInt(style.bottom.replace(/[^0-9]/ig, '')) || 0
        const isBottomItem = Math.round((rect.bottom > window.innerHeight ? window.innerHeight : rect.bottom) - itemRect.bottom)

        item.classList.toggle(props.className,
          isTop === Math.round(isTopItem) ||
          isTop === Math.floor(isTopItem) ||
          isBottom === Math.ceil(isBottomItem) ||
          isBottom === Math.floor(isBottomItem)
        )
      })
    }
  }

  onMounted(async () => {
    await nextTick()
    update()
    onScroll.value()
  })
  onUpdated(update)

  return {}
}
