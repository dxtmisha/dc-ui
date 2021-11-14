import EventControl from '@/classes/EventControl'
import { nextTick, onMounted, watch } from 'vue'

export const useToggle = function (
  valueToggle,
  valueOpen,
  modal,
  verification,
  watchPosition
) {
  const eventBody = EventControl.init(document.body, (event) => {
    if (valueToggle.value) {
      verification(event.target)
    } else {
      event.$event.stop()
    }
  })

  const classShow = (value) => modal.value.classList.toggle('status-show', value)
  const classHide = (value) => modal.value.classList.toggle('status-hide', value)

  const toggle = async () => {
    if (!valueOpen.value !== !valueToggle.value) {
      if (valueToggle.value) {
        valueOpen.value = valueToggle.value

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

  watch(valueToggle, toggle)
  onMounted(toggle)

  return {}
}
