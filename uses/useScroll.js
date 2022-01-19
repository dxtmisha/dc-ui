import { computed, ref } from 'vue'
import createElement from '../functions/createElement'

const SCROLL = '__dcUi-scroll'
let calculate = false

const getWidth = () => parseInt(sessionStorage.getItem(SCROLL) || '-1')
const setWidth = function () {
  return new Promise(resolve => {
    if (calculate) {
      const intervalId = setInterval(() => {
        if (!calculate) {
          clearInterval(intervalId)
          resolve(getWidth())
        }
      }, 120)
    } else {
      calculate = true

      const element = createElement(document.body, 'div', element => {
        element.style.height = '24px'
        element.style.overflowY = 'scroll'
        element.style.position = 'fixed'
        element.style.width = '100%'

        createElement(element, 'div', element => {
          element.style.height = '100px'
        })
      })

      requestAnimationFrame(() => {
        const width = element.offsetWidth - element.clientWidth

        sessionStorage.setItem(SCROLL, width.toString())
        resolve(width)

        element.remove()
        calculate = false
      })
    }
  })
}

export default function useScroll () {
  const width = getWidth()
  const disabled = ref(width < 8)

  if (width === -1) {
    setWidth().then(value => {
      disabled.value = value < 8
    })
  }

  return computed(() => {
    return {
      'd-scrollbar': true,
      'status-disabled': disabled.value
    }
  })
}
