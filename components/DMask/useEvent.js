export default function useEvent (
  standard,
  change,
  newValue,
  setValue,
  popValue,
  pasteValue
) {
  let unidentified, length, selectionStart, selectionEnd

  const onKeypress = event => {
    if (event.target.selectionStart === event.target.selectionEnd) {
      setValue(event.target.selectionStart, event.key)
    } else {
      for (let i = event.target.selectionEnd; i > event.target.selectionStart; i--) {
        popValue(i, false)
      }

      setValue(event.target.selectionStart, event.key)
    }
  }
  const onKeydown = event => {
    if (event.key === 'Unidentified' || event.keyCode === 229) {
      unidentified = true
      length = event.target.value.length
      selectionStart = event.target.selectionStart
      selectionEnd = event.target.selectionEnd
    } else if (event.key === 'Backspace') {
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
    const start = event.target.selectionStart

    if (start !== event.target.selectionEnd) {
      for (let i = event.target.selectionEnd; i > start; i--) {
        popValue(i, false)
      }
    }

    pasteValue(start, (event.clipboardData || window.clipboardData).getData('text'))
  }
  const onBlur = () => {
    if (change.value) {
      change.value = false
    }
  }
  const onInput = event => {
    if (unidentified) {
      if (selectionStart !== selectionEnd) {
        for (let i = selectionEnd; i > selectionStart; i--) {
          popValue(i, false)
        }
      }

      if (event.data) {
        if (!setValue(selectionStart, event.data)) {
          event.target.value = standard.value
          requestAnimationFrame(() => {
            event.target.selectionStart = selectionStart
            event.target.selectionEnd = selectionStart
          })
        }
      } else if (
        length > event.target.value.length &&
        selectionStart === selectionEnd
      ) {
        popValue(selectionStart)
      }
    }
  }
  const onChange = ({ target }) => newValue(target.value)

  return {
    onKeypress,
    onKeydown,
    onPaste,
    onBlur,
    onInput,
    onChange
  }
}
