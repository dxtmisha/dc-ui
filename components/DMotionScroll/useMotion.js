import { computed, nextTick, onBeforeUpdate, onMounted, onUpdated, ref, watch } from 'vue'

export default function useMotion (
  id,
  scroll,
  props,
  propElement,
  context,
  onScroll
) {
  let top, time

  const propPage = ref(props.page)
  const propItem = computed(() => document.querySelector(`.${id}[data-page="${propPage.value}"]`))

  const emit = () => context.emit('on-scroll', {
    value: propPage.value,
    item: propItem.value
  })

  const update = async () => {
    await nextTick()

    if (propItem.value) {
      const distance = propItem.value.getBoundingClientRect().top - propElement.value.getBoundingClientRect().top
      propElement.value.scrollTop += distance
    }
  }

  onScroll.value = event => {
    if (
      !scroll.value || (
        event.$element !== propElement.value &&
        event.$element !== props.element
      )
    ) {
      event.$event.stop()
    } else if (!time) {
      time = setTimeout(() => {
        if (scroll.value) {
          const central = propElement.value.scrollTop + (propElement.value.clientHeight / 2)
          let focus

          scroll.value.querySelectorAll(`.${id}`).forEach(item => {
            if (item.offsetTop < central) {
              focus = item.dataset.page
            }
          })

          if (focus) {
            propPage.value = focus
          }
        }

        time = undefined
      }, 256)
    }
  }

  watch(propPage, emit)

  onMounted(update)
  onBeforeUpdate(() => {
    top = propItem.value.getBoundingClientRect().top
  })
  onUpdated(async () => {
    const distance = top - propItem.value.getBoundingClientRect().top

    if (distance !== 0) {
      propElement.value.scrollTop -= distance
    }
  })

  return {
    update
  }
}
