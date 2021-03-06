import { onBeforeUnmount } from 'vue'
import EventControl from '../../classes/EventControl'
import getIdElement from './../../functions/getIdElement'

export default function useEvent (
  content,
  props,
  context,
  propOpen
) {
  const emit = (target = undefined, type = 'basic') => context.emit('on-open', {
    open: !props.open,
    target,
    type
  })
  const event = EventControl.init(document.body, ({ target }) => {
    const selector = getIdElement(content.value, '')

    if (
      propOpen.value &&
      !target.closest('.panel-global-static') && (
        target.closest(`${selector} .panel-close`) ||
        (
          props.autoClose &&
          !target.closest(selector) &&
          !(props.ignore && target.closest(getIdElement(props.ignore, ''))) &&
          !(props.ignoreSelector && target.closest(props.ignoreSelector))
        )
      )
    ) {
      emit(target, 'body')
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

  const onTop = event => {
    if (event.value === 'cancel') {
      emit(undefined, 'top')
    }

    context.emit('on-top', event)
  }

  onBeforeUnmount(() => event.stop())

  return {
    toggleEvent,
    onClick,
    onTop
  }
}
