import { onBeforeMount, onMounted, ref, watch } from 'vue'

/**
 * @param {*} sources
 * @param {function} cb
 * @param {Array} hook
 * @returns {*}
 */
export const useWatch = function (sources, cb, hook = ['go']) {
  const data = ref(undefined)
  const update = () => cb(data, ...arguments)

  watch(sources, update)

  hook.forEach(name => {
    switch (name) {
      case 'before':
        onBeforeMount(update)
        break
      case 'mounted':
        onMounted(update)
        break
      case 'go':
        update()
        break
    }
  })

  return data
}
