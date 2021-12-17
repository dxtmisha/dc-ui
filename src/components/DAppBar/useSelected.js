import { computed, ref } from 'vue'
import getIdElement from '@/functions/getIdElement'

export default function useSelected (
  app,
  props,
  context
) {
  const selectedHref = ref(undefined)

  const contentSelected = ref(undefined)
  const contentShow = ref(false)
  const contentOpen = computed(() => 'head' in context.slots || !!contentSelected.value)

  const propSelected = computed(() => contentSelected.value || props.selected || selectedHref.value)

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
