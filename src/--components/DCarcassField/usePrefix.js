import { nextTick, onMounted, toRefs, watch } from 'vue'
import useStyle from '@/--uses/useStyle'

export default function usePrefix (field, props) {
  const {
    prefix,
    suffix
  } = toRefs(props)

  const prefixWidth = useStyle(field, '--_cf__pr-width', 'px', 0)
  const suffixWidth = useStyle(field, '--_cf__sf-width', 'px', 0)

  const update = async () => {
    await nextTick()
    prefixWidth.set(field.value.querySelector('.cf-prefix')?.offsetWidth || 0)
    suffixWidth.set(field.value.querySelector('.cf-suffix')?.offsetWidth || 0)

    requestAnimationFrame(() => {
    })
  }

  watch([prefix, suffix], update)

  onMounted(update)

  return {}
}
