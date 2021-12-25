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
      items.value.forEach(item => {
        const top = Math.round(item.getBoundingClientRect().top)

        item.classList.toggle(props.className, item?.__oldStickyScroll === top)
        item.__oldStickyScroll = top
      })
    }
  }

  onMounted(async () => {
    await nextTick()
    update()

    const edit = propElement.value.scrollTop === 0 ? 1 : -1

    onScroll.value()
    propElement.value.scrollTop += edit
    onScroll.value()
    propElement.value.scrollTop -= edit
  })
  onUpdated(update)

  return {}
}
