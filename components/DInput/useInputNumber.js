export default function useInputNumber (
  props,
  propValue,
  onEmit
) {
  return {
    onKeypress: event => {
      if (
        props.type === 'tel' &&
        !event.key.toString().match(/[0-9]/)
      ) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    onPaste: event => {
      if (props.type === 'tel') {
        const paste = (event.clipboardData || window.clipboardData)
          .getData('text')
          .replace(/[^0-9]+/ig, '')

        if (
          paste &&
          paste.length > 0
        ) {
          event.preventDefault()

          const org = event.target.value
          const selection = event.target.selectionStart + paste.length

          event.target.value = `${org.substring(0, event.target.selectionStart)}${paste}${org.substring(event.target.selectionEnd)}`
          event.target.selectionEnd = selection
          event.target.selectionStart = selection

          propValue.value = event.target.value
          onEmit()
        }
      }
    }
  }
}
