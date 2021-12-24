export default function useEvent (
  change,
  newValue,
  setValue,
  popValue,
  pasteValue
) {
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
    }
  }
  const onChange = ({ target }) => newValue(target.value)

  return {
    onKeypress,
    onKeydown,
    onPaste,
    onBlur,
    onChange
  }
}
