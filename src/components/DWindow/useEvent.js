export const useEvent = function (
  valueToggle,
  valueOpen,
  contextmenu,
  clientX,
  clientY,
  verification
) {
  const onClick = (event) => {
    clientX.value = event.clientX
    clientY.value = event.clientY

    if (!valueToggle.value) {
      contextmenu.value = event.type === 'contextmenu'
      verification(event.target)
    }
  }
  const onContextmenu = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }
  const onClose = ({ propertyName }) => {
    if (propertyName === 'visibility') {
      valueOpen.value = false
    }
  }

  return {
    onClick,
    onContextmenu,
    onClose
  }
}
