import { onMounted, onUnmounted, onUpdated, toRefs, watch } from 'vue'
import EventControl from '@/classes/EventControl'

export default function useWoven (
  images,
  props,
  propList
) {
  const { appearance } = toRefs(props)

  let event

  const resize = () => {
    let turn = false
    let top
    console.log('e')
    propList.value.forEach(item => {
      const el = images.value.querySelector(`.d-images-item[data-value="${item.value}"]`)
      const rect = el.getBoundingClientRect()
      const size = Math.ceil(rect.top + rect.height / 2)

      if (top !== size) {
        turn = !turn
        top = size
      }
      console.log(size, turn)
      el.classList.toggle('option-turn', turn)
    })
  }

  const update = () => {
    if (
      images.value &&
      appearance.value === 'woven'
    ) {
      if (!event) {
        event = EventControl.init(window, resize, ['resize']).go()
      }

      resize()
    } else if (event) {
      event.stop()
      event = undefined
    }
  }

  watch([appearance, propList], update)

  onMounted(update)
  onUpdated(update)
  onUnmounted(() => {
    if (event) {
      event.stop()
    }
  })
}
