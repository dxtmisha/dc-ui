import { ref, watch } from 'vue'

export const useClass = function (element, name, cb = undefined) {
  const item = ref(false)

  watch(item, (value) => {
    if (cb) {
      cb(value)
    }

    if (element.value) {
      element.value?.classList.toggle(name, value)
    }
  })

  return item
}
