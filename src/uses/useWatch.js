import { onBeforeMount, onMounted, onUpdated, ref, watch } from 'vue'

export default function useWatch (
  sources,
  cb,
  hook = ['go'],
  value = undefined,
  deep = false
) {
  const data = ref(value)
  const update = () => cb(data, ...arguments)

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
      case 'go':
        update()
        break
    }
  })

  return data
}
