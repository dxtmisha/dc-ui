import EventControl from '../../classes/EventControl'
import { ref } from 'vue'

export default function usePosition (
  image,
  props,
  propValue,
  context,
  size
) {
  let x, y, unitX, unitY, valueX, valueY, edit

  const propValidationMessage = ref(undefined)

  const isX = event => event.clientX || event?.targetTouches?.[0].clientX || event?.touches?.[0].clientX
  const isY = event => event.clientY || event?.targetTouches?.[0].clientY || event?.touches?.[0].clientY

  const setMove = (clientX, clientY) => {
    const newX = valueX + (unitX * (x - clientX))
    const newY = valueY + (unitY * (y - clientY))

    propValue.value.x = newX < 0
      ? 0
      : newX > 100
        ? 100
        : newX

    propValue.value.y = newY < 0
      ? 0
      : newY > 100
        ? 100
        : newY
  }

  const setChange = () => undefined
  const checkValidity = () => true
  const emit = () => {
    context.emit('on-input', {
      type: 'on-input',
      value: { ...propValue.value },
      validation: checkValidity(),
      validationMessage: propValidationMessage.value
    })
  }

  const onMousedown = event => {
    if (
      !props.disabled &&
      !props.readonly
    ) {
      event.preventDefault()
      event.stopPropagation()

      const rect = image.value.getBoundingClientRect()
      const isImage = size.value?.width >= size.value?.height
      const isShow = rect.width >= rect.height
      const percentX = isImage ? (propValue.value.zoom / size.value?.height * size.value?.width) : propValue.value.zoom
      const percentY = isImage ? propValue.value.zoom : (propValue.value.zoom / size.value?.width * size.value?.height)
      const showX = isShow ? (100 / rect.height * rect.width) : 100
      const showY = isShow ? 100 : (100 / rect.width * rect.height)
      const differenceX = percentX - showX
      const differenceY = percentY - showY

      x = isX(event)
      y = isY(event)
      valueX = propValue.value.x
      valueY = propValue.value.y
      unitX = differenceX !== 0 ? (100 / (rect.width * differenceX / showX)) : 0
      unitY = differenceY !== 0 ? (100 / (rect.height * differenceY / showY)) : 0
      edit = false

      EventControl.init(document.body, onMousemove, [
        'mousemove',
        'mouseup',
        'contextmenu',
        'touchmove',
        'touchend',
        'touchcancel'
      ])
        .setDomElement(image.value)
        .go()
    }
  }
  const onMousemove = event => {
    if (
      ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].indexOf(event.type) !== -1 ||
      (!event?.buttons && !('touches' in event) && !('targetTouches' in event))
    ) {
      event.$event.stop()

      if (edit) {
        emit()
      }
    } else {
      edit = true
      setMove(isX(event), isY(event))
    }
  }

  return {
    propValidationMessage,
    setChange,
    checkValidity,
    emit,
    onMousedown
  }
}
