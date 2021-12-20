import EventControl from '@/classes/EventControl'
import toggleArrayValue from '@/functions/toggleArrayValue'
import useClass from '@/uses/useClass'
import useStyleList from '@/--uses/useStyleList'
import { ref } from 'vue'

export default function useSquare (
  selection,
  square,
  props,
  propSelected,
  getItems,
  updateSelection,
  emit
) {
  let old = []
  let save = []
  const client = {
    x: 0,
    y: 0
  }

  const classSelected = useClass(ref(document.body), 'd-control-selection__body')
  const classSquare = useClass(square, 'cs-show', false, value => classSelected.set(value))
  const styleSquare = useStyleList(square, {
    x: '--_cs-x',
    y: '--_cs-y',
    width: '--_cs-width',
    height: '--_cs-height'
  }, 'px')

  const updateSquare = (x, y) => {
    const width = x - client.x
    const height = y - client.y

    styleSquare.set({
      x: width < 0 ? x : client.x,
      y: height < 0 ? y : client.y,
      width: Math.abs(width),
      height: Math.abs(height)
    })
  }
  const selectionBySquare = () => {
    const squareRect = square.value.getBoundingClientRect()
    const items = getItems()

    save = [...old]

    items.forEach(item => {
      const rect = item.getBoundingClientRect()

      if (!(
        rect.right < squareRect.left ||
        rect.bottom < squareRect.top ||
        rect.left > squareRect.right ||
        rect.top > squareRect.bottom
      )) {
        toggleArrayValue(save, item.dataset?.value)
      }
    })
  }

  const onMousemove = event => {
    if (event.type === 'mouseup' || !event?.buttons) {
      event.$event.stop()

      selectionBySquare()
      classSquare.set(false)

      propSelected.value = save
      emit()
    } else {
      const rect = selection.value.getBoundingClientRect()

      updateSquare(event.clientX - rect.left, event.clientY - rect.top)
      selectionBySquare()
      updateSelection(save)
    }
  }
  const onMousedown = event => {
    if (
      !props.disabled &&
      !event.ctrlKey &&
      !event.shiftKey &&
      event.target === selection.value
    ) {
      const rect = selection.value.getBoundingClientRect()

      old = event.metaKey ? propSelected.value : []
      client.x = event.clientX - rect.left
      client.y = event.clientY - rect.top

      EventControl.init(document.body, onMousemove, ['mousemove', 'mouseup'])
        .setDomElement(selection.value)
        .go()

      updateSquare(client.x, client.y)
      classSquare.set(true)
    }
  }

  return { onMousedown }
}
