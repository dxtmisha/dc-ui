import { computed, onMounted, watch } from 'vue'
import EventControl from '@/classes/EventControl'
import useClass from '@/uses/useClass'

export default function useScrollBorder (
  scroll,
  border
) {
  let eventControl
  const top = useClass(scroll, 'status-top')
  const bottom = useClass(scroll, 'status-bottom')

  const update = () => {
    if (scroll.value) {
      top.set(scroll.value.scrollTop !== 0)
      bottom.set(scroll.value.scrollTop !== scroll.value.scrollHeight - scroll.value.clientHeight)
    }
  }
  const toggle = () => {
    if (
      border.value &&
      scroll.value &&
      !eventControl
    ) {
      eventControl = EventControl.init(
        scroll.value,
        event => {
          if (!border.value) {
            event.$event.stop()
            eventControl = undefined
          } else if (event.target === scroll.value) {
            update()
          }
        },
        ['scroll']
      )
        .setDomElement(scroll.value)
        .go()

      update()
    }
  }

  watch(border, toggle)
  onMounted(toggle)

  return computed(() => {
    return { 'd-scrollbar-border': border.value }
  })
}
