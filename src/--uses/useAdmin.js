import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'

export const useAdmin = function (name, context = undefined) {
  let mounted, updated

  if (context?.attrs?.admin) {
    onBeforeMount(() => {
      mounted = new Date()
    })
    onBeforeUpdate(() => {
      updated = new Date()
    })

    onMounted(() => console.info(`${name}: mounted (${new Date() - mounted})`))
    onUpdated(() => console.info(`${name}: updated (${new Date() - updated})`))
    onUnmounted(() => console.info(`${name}: unmounted`))
  }
}
