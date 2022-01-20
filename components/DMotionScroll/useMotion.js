import { computed, nextTick, onMounted, onUpdated, ref, watch } from 'vue'

export default function useMotion (
  id,
  scroll,
  props,
  propElement,
  context,
  onScroll
) {
  let block, top
  // let distance = 0
  let time
  let el

  const propPage = ref(props.page)
  const propItem = computed(() => document.querySelector(`.${id}[data-page="${propPage.value}"]`))

  const emit = () => context.emit('on-scroll', {
    value: propPage.value,
    item: propItem.value // ,
    // distance
  })

  const update = (start = false) => {
    /*
    if (
      propPage.value &&
      propItem.value &&
      (top >= 0 || start)
    ) {
      propElement.value.scrollTop = propItem.value.offsetTop + distance + propElement.value.scrollTop - top
      top = -1
    } else {
      top = +0
    }
     */
  }

  const controlPage = () => {
    if (!time) {
      time = setTimeout(() => {
        const central = propElement.value.scrollTop + (propElement.value.clientHeight / 2)
        let focus

        scroll.value.querySelectorAll(`.${id}`).forEach(item => {
          if (item.offsetTop < central) {
            el = item
            focus = item.dataset.page
          }
        })

        if (focus) {
          propPage.value = focus
        }

        time = undefined
      }, 256)
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
    } else if (!block) {
      controlPage()

      if (el) {
        top = el.getBoundingClientRect().top
      }
    }
    /*
    if (
      !scroll.value || (
        event.$element !== propElement.value &&
        event.$element !== props.element
      )
    ) {
      event.$event.stop()
    } else if (top < 0) {
      top = 0
    } else if (top < 1) {
      clearTimeout(time)

      time = setTimeout(() => {
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
      }, 256)
    }
    */
  }

  watch(propPage, () => {
    block = true
    console.warn('propPage.value', propPage.value, el, top)
    emit()
    /*
    top = propElement.value.scrollTop
    distance = top - propItem.value.offsetTop
    emit()
     */

    requestAnimationFrame(async () => {
      await nextTick()
      // update()
    })
  })

  onMounted(async () => {
    await nextTick()
    update(true)
  })

  onUpdated(async () => {
    await nextTick()
    update()

    // block = false
  })

  return {
    update
  }
}
