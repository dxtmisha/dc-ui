import { ref, watch } from 'vue'

export const useStyle = function (element, name, cb = undefined) {
  const item = ref(false)

  watch(item, (value) => {
    const read = cb ? cb(value) : value
    element.value?.style.setProperty(name, read === undefined ? value : read)
  })

  return { item }
}
