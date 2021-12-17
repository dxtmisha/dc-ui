import { onBeforeUnmount } from 'vue'
import EventControl from '@/classes/EventControl'
import getIdElement from '@/functions/getIdElement'

export default function useEvent (
  content,
  props,
  context,
  propOpen
) {
  const emit = target => context.emit('on-open', {
    open: !props.open,
    target
  })
  const event = EventControl.init(document.body, ({ target }) => {
    const selector = getIdElement(content.value, '')

    if (
      propOpen.value && (
        target.closest(`${selector} .panel-close`) ||
        (props.autoClose && !target.closest(selector))
      )
    ) {
      emit(target)
    }
  })

  const toggleEvent = () => requestAnimationFrame(() => event.toggle(propOpen.value = props.open))

  const onClick = ({ target }) => {
    if (
      props.click &&
      !target.closest('.panel-static')
    ) {
      emit(target)
    }
  }

  onBeforeUnmount(() => event.stop())

  return {
    toggleEvent,
    onClick
  }
}
