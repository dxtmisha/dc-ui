import { computed, onMounted, watch } from 'vue'
import EventControl from '../classes/EventControl'
import useClass from './useClass'

export default function useScrollBorder (
  scroll,
  border
) {
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
      scroll.value
    ) {
      if ('eventControl' in scroll.value) {
        scroll.value.eventControl.stop()
        scroll.value.eventControl = undefined
      }

      scroll.value.eventControl = EventControl.init(
        scroll.value,
        event => {
          if (!border.value) {
            event.$event.stop()
            scroll.value.eventControl = undefined
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

  watch([scroll, border], toggle)
  onMounted(toggle)

  return computed(() => {
    return { 'd-scrollbar-border': border.value }
  })
}
