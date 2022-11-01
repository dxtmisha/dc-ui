import { nextTick, ref, onMounted, watch } from 'vue'
import useStyle from '../../uses/useStyle'

export default function useSlot (field) {
  const slotLeft = ref(undefined)
  const slotLeftWidth = useStyle(field, '--_cf__sl-width', 'px')

  const updateSlot = async () => {
    await nextTick()
    requestAnimationFrame(() => {
      slotLeftWidth.set(slotLeft.value?.offsetWidth || undefined)
    })
  }

  watch(slotLeft, updateSlot)
  onMounted(updateSlot)

  return {
    slotLeft,
    updateSlot
  }
}
