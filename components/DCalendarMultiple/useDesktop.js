import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import EventControl from '../../classes/EventControl'

export default function useDesktop (calendar, props) {
  const { calendarAdaptive } = toRefs(props)

  const desktop = ref(undefined)
  const updateDesktop = () => requestAnimationFrame(() => {
    desktop.value = getComputedStyle(calendar.value).content === '"--DESKTOP--"'
  })

  const event = EventControl.init(window, updateDesktop, ['resize']).go()

  watch(calendarAdaptive, updateDesktop)
  onMounted(updateDesktop)
  onUnmounted(() => event.stop())

  return {
    desktop,
    updateDesktop
  }
}
