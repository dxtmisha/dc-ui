import { useStyle } from '@/--uses/useStyle'
import { nextTick, onMounted, watch } from 'vue'

export const usePrefix = function (
  field,
  prefix,
  suffix
) {
  const prefixWidth = useStyle(field, '--_cf__pr-width', 'px')
  const suffixWidth = useStyle(field, '--_cf__sf-width', 'px')

  const update = async () => {
    await nextTick()

    requestAnimationFrame(() => {
      prefixWidth.value = field.value.querySelector('.cf-prefix')?.offsetWidth || 0
      suffixWidth.value = field.value.querySelector('.cf-suffix')?.offsetWidth || 0
    })
  }

  watch([
    prefix,
    suffix
  ], update)

  onMounted(update)

  return {}
}
