import { ref } from 'vue'
import { createElement } from '@/--tool/functions'

export const useItem = function () {
  const ripple = ref([])

  const add = (x, y) => createElement(ripple.value, 'span', (item) => {
    item.onanimationend = () => item.classList.add('step-1')
    item.ontransitionend = () => ripple.value.removeChild(item)

    item.__step = 0
    item.style.setProperty('--_rp-x', `${x}px`)
    item.style.setProperty('--_rp-y', `${y}px`)
    item.classList.add('d-ripple__item')
  })

  const onMousedown = ({
    offsetX,
    offsetY
  }) => add(offsetX, offsetY)

  return {
    ripple,
    onMousedown
  }
}
