import { computed, onUnmounted, ref } from 'vue'
import EventControl from '@/classes/EventControl'
import getIdElement from '@/functions/getIdElement'
import forEach from '@/functions/forEach'

export default function useSelected (
  app,
  props,
  context,
  menu
) {
  const hrefSelected = ref(undefined)
  const contentOld = ref(undefined)
  const contentSelected = ref(undefined)
  const contentShow = ref(false)
  const contentOpen = computed(() => 'head' in context.slots || !!contentSelected.value)

  const getMenu = (listener = undefined) => {
    const data = []

    menu.forEach(list => forEach(list.value, item => {
      if (listener) {
        listener(item)
      } else {
        data.push(item)
      }
    }))

    return data
  }

  const propSelected = computed(() => contentSelected.value || props.selected || hrefSelected.value)
  const propSlots = computed(() => {
    const list = []
    const data = getMenu()

    forEach(context.slots, (item, index) => {
      if (['default', 'list'].indexOf(index) === -1) {
        list.push({
          index,
          text:
            props?.listContent?.[index] ||
            data.find(item => item.value === index).text
        })
      }
    })

    return list
  })
  const directions = computed(() => {
    const data = getMenu()
    const old = data.findIndex(item => item.value === contentOld.value)
    const selected = data.findIndex(item => item.value === contentSelected.value)

    return old < selected ? 'next' : 'back'
  })

  const set = event => {
    if (event.value in context.slots) {
      contentOld.value = contentSelected.value
      contentSelected.value = contentSelected.value === event.value ? undefined : event.value
    } else {
      contentSelected.value = undefined
      context.emit('on-click', event)
    }

    if (contentSelected.value) {
      contentShow.value = true
    }
  }
  const updateHref = () => {
    const url = [
      location.hash,
      location.pathname + location.hash,
      location.href
    ]

    getMenu(item => {
      if (item?.href) {
        url.forEach(hash => {
          if (hash.match(item.href)) {
            hrefSelected.value = item?.value
          }
        })
      }
    })
  }

  const event = EventControl.init(window, updateHref, ['popstate']).go()

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
    propSlots,
    contentSelected,
    contentShow,
    contentOpen,
    directions,
    set,
    onOpen,
    onClose
  }
}
