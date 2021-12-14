import { inject, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, provide } from 'vue'

export default function useAdmin (
  name,
  context = undefined,
  item = undefined
) {
  let mounted, updated
  const id = context?.attrs?.id || ''
  const isAdmin = inject('admin', false)

  if (
    isAdmin || (context && 'admin' in context.attrs)
  ) {
    onBeforeMount(() => {
      mounted = new Date()
      // console.info(`[${id}] ${name}: before mount`)
    })
    onBeforeUpdate(() => {
      updated = new Date()
      // console.info(`[${id}] ${name}: before update`)
    })

    onMounted(() => console.info(`[${id}] ${name}: mounted (${new Date() - mounted})`, item?.value))
    onUpdated(() => console.info(`[${id}] ${name}: updated (${new Date() - updated})`, item?.value))
    onUnmounted(() => console.info(`[${id}] ${name}: unmounted`))

    if (!isAdmin) {
      provide('admin', true)
    }
  }
}
