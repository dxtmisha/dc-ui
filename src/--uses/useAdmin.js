import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'

export const useAdmin = function (
  name,
  context = undefined,
  item = undefined
) {
  let mounted, updated

  if (context?.attrs?.admin) {
    onBeforeMount(() => {
      mounted = new Date()
    })
    onBeforeUpdate(() => {
      updated = new Date()
    })

    onMounted(() => console.log(`${name}: mounted (${new Date() - mounted})`, item))
    onUpdated(() => console.log(`${name}: updated (${new Date() - updated})`, item))
    onUnmounted(() => console.log(`${name}: unmounted`))
  }
}
