import { useWatch } from '@/uses/useWatch'

export const useEvent = function (
  input,
  standard,
  validationMessage,
  setValue,
  pasteValue,
  popValue,
  checkValidity,
  context
) {
  const emit = (name = 'on-input') => requestAnimationFrame(() => {
    context.emit(name, {
      value: standard.value,
      validation: checkValidity(),
      validationMessage: validationMessage.value
    })
  })

  const change = useWatch(standard, data => {
    if (input.value) {
      input.value.value = standard.value

      emit()
      data.value = true
    }
  }, [])

  const onKeypress = event => setValue(event.target.selectionStart, event.key)
  const onKeydown = event => {
    if (event.key === 'Backspace') {
      event.preventDefault()

      if (event.target.selectionStart === event.target.selectionEnd) {
        popValue(event.target.selectionStart)
      } else {
        for (let i = event.target.selectionEnd; i > event.target.selectionStart; i--) {
          popValue(i, false)
        }
      }
    }
  }
  const onPaste = event => {
    let start = event.target.selectionStart

    if (start !== event.target.selectionEnd) {
      for (let i = event.target.selectionEnd; i > start; i--) {
        popValue(i, false)
      }
    }

    if (start > 0) {
      start--
    }

    pasteValue(start, (event.clipboardData || window.clipboardData).getData('text'))
  }
  const onBlur = () => {
    if (change.value) {
      change.value = false
      emit('on-change')
    }
  }

  return {
    onKeypress,
    onKeydown,
    onPaste,
    onBlur
  }
}
