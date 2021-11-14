import { onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue'

const admin = true

export const useAdmin = function (name) {
  if (admin) {
    onBeforeMount(() => console.info(`${name}: before`))
    onMounted(() => console.info(`${name}: mounted`))
    onUpdated(() => console.info(`${name}: updated`))
    onUnmounted(() => console.info(`${name}: unmounted`))
  }

  return {}
}
