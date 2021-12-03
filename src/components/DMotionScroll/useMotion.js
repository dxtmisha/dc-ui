import { computed, nextTick, onMounted, ref, watch } from 'vue'
import EventControl from '@/classes/EventControl'

export default function useMotion (
  id,
  scroll,
  props,
  context
) {
  let top = -1
  let distance = 0

  const propPage = ref(props.page)
  const propItem = computed(() => document.querySelector(`.${id}[data-page="${propPage.value}"]`))
  const propElement = computed(() => {
    if (props.element === window) {
      return document.documentElement
    } else {
      return props.element || scroll.value
    }
  })

  const emit = () => context.emit('on-scroll', {
    value: propPage.value,
    item: propItem.value,
    distance
  })

  const update = (start = false) => {
    if (
      propPage.value &&
      ((top >= 0 && propElement.value.scrollTop === top) || start)
    ) {
      propElement.value.scrollTop = propItem.value.offsetTop + distance + propElement.value.scrollTop - top
      top = -1
    } else {
      top = +0
    }
  }

  const onScroll = event => {
    if (
      event.$element !== propElement.value &&
      event.$element !== props.element
    ) {
      event.$event.stop()
    } else if (top < 0) {
      top = 0
    } else if (top < 1) {
      let focus

      const central = propElement.value.scrollTop + propElement.value.clientHeight / 2

      scroll.value.querySelectorAll(`.${id}`).forEach(item => {
        if (item.offsetTop < central) {
          focus = item.dataset.page
        }
      })

      if (focus) {
        propPage.value = focus
      }
    }
  }
  const switchEvent = () => EventControl
    .init(props.element || propElement.value, onScroll, ['scroll'])
    .go()

  watch(propPage, () => {
    top = propElement.value.scrollTop
    distance = top - propItem.value.offsetTop
    emit()

    requestAnimationFrame(async () => {
      await nextTick()
      update()
    })
  })
  watch(propElement, () => switchEvent())

  onMounted(async () => {
    await nextTick()
    update(true)
    switchEvent()
  })

  return {}
}
