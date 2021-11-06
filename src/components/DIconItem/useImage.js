import { onBeforeMount, ref, watch } from 'vue'
import { getFileResult } from '@/uses/useFile'

export const useImage = function (icon) {
  const image = ref(undefined)

  const update = async () => {
    image.value = undefined
    image.value = icon.value instanceof File ? await getFileResult(icon.value) : icon.value
  }

  watch(icon, update)
  onBeforeMount(update)

  return {
    image
  }
}
