import { ref } from 'vue'

export const useValidity = function (
  input
) {
  const validationMessage = ref(undefined)

  const checkValidity = () => {
    const check = input.value?.checkValidity()

    validationMessage.value = input.value?.validationMessage
    return check
  }

  return {
    validationMessage,
    checkValidity
  }
}
