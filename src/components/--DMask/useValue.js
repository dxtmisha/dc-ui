import { onMounted, watch } from 'vue'

export const useValue = function (
  value,
  resetValue,
  resetCharacter
) {
  const cancel = () => resetCharacter('')

  watch(value, resetValue)
  onMounted(resetValue)

  return {
    cancel
  }
}
