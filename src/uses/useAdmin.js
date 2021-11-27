import { onMounted, onUnmounted, onUpdated } from 'vue'

const admin = true

export const useAdmin = function (name) {
  if (admin) {
    onMounted(() => console.info(`${name}: mounted`))
    onUpdated(() => console.info(`${name}: updated`))
    onUnmounted(() => console.info(`${name}: unmounted`))
  }

  return {}
}
