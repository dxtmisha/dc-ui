import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'

export default function useAdmin (name, context = undefined) {
  let mounted, updated
  const id = context?.attrs?.id || ''

  if (context?.attrs?.admin) {
    onBeforeMount(() => {
      mounted = new Date()
    })
    onBeforeUpdate(() => {
      updated = new Date()
    })

    onMounted(() => console.info(`[${id}] ${name}: mounted (${new Date() - mounted})`))
    onUpdated(() => console.info(`[${id}] ${name}: updated (${new Date() - updated})`))
    onUnmounted(() => console.info(`[${id}] ${name}: unmounted`))
  }
}
