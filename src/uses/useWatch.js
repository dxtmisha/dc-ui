import { onBeforeMount, onMounted, ref, watch } from 'vue'

export const useWatch = function (sources, cb, hook = ['go'], value = undefined) {
  const data = ref(value)
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
