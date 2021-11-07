import { ref } from 'vue'
import { createElement } from '@/uses/useElement'

const SCROLL = '__dui-scroll'

let calculate
let width = (() => {
  const value = localStorage.getItem(SCROLL)
  return value === null ? -1 : parseInt(value)
})()

const setWidth = async function () {
  return new Promise(resolve => {
    if (calculate) {
      const intervalId = setInterval(() => {
        if (!calculate) {
          clearInterval(intervalId)
          resolve(width)
        }
      }, 40)
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
        resolve(width = element.offsetWidth - element.clientWidth)
        localStorage.setItem(SCROLL, width)

        element.remove()
        calculate = false
      })
    }
  })
}

export const useScroll = function () {
  const scrollWidth = ref(width)

  if (scrollWidth.value === -1) {
    (async () => {
      scrollWidth.value = await setWidth()
    })()
  }

  return {
    scrollWidth
  }
}
