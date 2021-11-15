import { computed } from 'vue'

export const useText = function (
  value,
  max
) {
  const text = computed(
    () => typeof value.value === 'number' && value.value > max.value ? `${max.value}+` : value.value
  )

  return { text }
}
