import { onMounted, ref, watch } from 'vue'

export const useBorder = function (border) {
  const scroll = ref(undefined)
  const top = ref(false)
  const bottom = ref(false)

  const update = () => {
    top.value = scroll.value?.scrollTop !== 0
    bottom.value = scroll.value?.scrollHeight - scroll.value?.clientHeight !== scroll.value?.scrollTop
  }

  const onScroll = (event) => {
    if (border.value && event.target === scroll.value) {
      update()
    }
  }

  watch(top, (top) => scroll.value?.classList.toggle('option-border-top', top))
  watch(bottom, (bottom) => scroll.value?.classList.toggle('option-border-bottom', bottom))
  watch(border, update)

  onMounted(update)

  return {
    scroll,
    onScroll
  }
}
