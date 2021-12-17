import { computed, onUnmounted, ref } from 'vue'
import getIdElement from '@/functions/getIdElement'
import forEach from '@/functions/forEach'
import EventControl from '@/classes/EventControl'

export default function useSelected (
  app,
  props,
  context,
  menu
) {
  const hrefSelected = ref(undefined)
  const contentSelected = ref(undefined)
  const contentShow = ref(false)
  const contentOpen = computed(() => 'head' in context.slots || !!contentSelected.value)

  const propSelected = computed(() => contentSelected.value || props.selected || hrefSelected.value)

  const updateHref = () => {
    const url = [
      location.hash,
      location.pathname + location.hash,
      location.href
    ]

    menu.forEach(list => {
      forEach(list.value, item => {
        if (item?.href) {
          url.forEach(hash => {
            if (hash.match(item.href)) {
              hrefSelected.value = item?.value
            }
          })
        }
      })
    })
  }

  const event = EventControl.init(window, updateHref, ['popstate']).go()

  const onClick = event => {
    if (event.value in context.slots) {
      contentSelected.value = contentSelected.value === event.value ? undefined : event.value
    } else {
      contentSelected.value = undefined
      context.emit('on-click', event)
    }

    if (contentSelected.value) {
      contentShow.value = true
    }
  }
  const onOpen = ({
    open,
    target
  }) => {
    const id = getIdElement(app.value, '')

    if (!open && !target.closest(id)) {
      contentSelected.value = undefined
    }
  }
  const onClose = () => {
    contentShow.value = false
  }

  onUnmounted(() => event.stop())
  updateHref()

  return {
    propSelected,
    contentSelected,
    contentShow,
    contentOpen,
    onClick,
    onOpen,
    onClose
  }
}
