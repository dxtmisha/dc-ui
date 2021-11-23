import { useWatch } from '@/uses/useWatch'

export const useEvent = function (
  input,
  standard,
  validationMessage,
  setValue,
  pasteValue,
  popValue,
  checkValidity,
  inputValue,
  context
) {
  const emit = (name = 'on-input') => requestAnimationFrame(() => {
    context.emit(name, {
      value: standard.value,
      validation: checkValidity(),
      validationMessage: validationMessage.value
    })
  })



  return {
    onKeypress,
    onKeydown,
    onPaste,
    onBlur
  }
}
