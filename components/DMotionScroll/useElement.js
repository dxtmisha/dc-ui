import { computed, onMounted, ref, watch } from 'vue'
import EventControl from '../../classes/EventControl'

export default function useElement (
  scroll,
  props
) {
  let switchItem
  const propElement = computed(() => {
    if (props.element === window) {
      return document.documentElement
    } else {
      return props.element || scroll.value
    }
  })

  const onScroll = ref(() => undefined)
  const switchEvent = () => {
    if (switchItem !== propElement.value) {
      EventControl
        .init(props.element || propElement.value, event => onScroll.value(event), ['scroll'])
        .setDomElement(propElement.value)
        .go()

      switchItem = propElement.value
    }
  }

  watch(propElement, () => switchEvent())
  onMounted(switchEvent)

  return {
    propElement,
    onScroll
  }
}
