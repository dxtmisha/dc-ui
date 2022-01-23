import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'

/**
 * @param sources
 * @param {Function} cb
 * @param {Array, String} hook
 * @param value
 * @param {Boolean} deep
 * @returns {ref}
 */
export default function useWatch (
  sources,
  cb,
  hook = ['go'],
  value = undefined,
  deep = false
) {
  const init = hook.indexOf('init') !== -1
  const data = ref(init ? cb() : value)
  const update = () => {
    const read = cb(data, ...arguments)

    if (init) {
      data.value = read
    }
  }

  watch(sources, update, { deep })

  hook.forEach(name => {
    switch (name) {
      case 'before':
        onBeforeMount(update)
        break
      case 'mounted':
        onMounted(update)
        break
      case 'updated':
        onUpdated(update)
        break
      case 'unmounted':
        onUnmounted(update)
        break
      case 'go':
        update()
        break
    }
  })

  return data
}
