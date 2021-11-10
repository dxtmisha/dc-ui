import EventControl from '@/classes/EventControl'
import { nextTick, onMounted, toRefs, watch } from 'vue'

export const useToggle = function (
  props,
  valueOpen,
  modal,
  verification,
  watchPosition
) {
  const { open } = toRefs(props)

  const eventBody = EventControl.init(document.body, (event) => {
    if (open.value) {
      verification(event.target)
    } else {
      event.$event.stop()
    }
  })

  const classShow = (value) => modal.value.classList.toggle('status-show', value)
  const classHide = (value) => modal.value.classList.toggle('status-hide', value)

  const toggle = async () => {
    if (valueOpen.value !== open.value) {
      if (open.value) {
        valueOpen.value = open.value

        await nextTick()
        watchPosition()

        requestAnimationFrame(() => {
          classShow(true)
          eventBody.setDomElement(modal.value).go()
        })
      } else {
        classHide(true)
        classShow(false)
        eventBody.stop()
      }
    }
  }

  watch(open, toggle)
  onMounted(toggle)

  return {}
}
