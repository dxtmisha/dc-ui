import { ref } from 'vue'
import { createElement } from '@/tool/functions'
import { useWatch } from '@/uses/useWatch'

const SCROLL = '__dui-scroll'

let calculate = false

const getWidth = () => parseInt(localStorage.getItem(SCROLL) || '-1')
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

        localStorage.setItem(SCROLL, width.toString())
        resolve(width)

        element.remove()
        calculate = false
      })
    }
  })
}

export const useScroll = function () {
  const width = ref(getWidth())
  const disabled = useWatch(width, data => {
    data.value = width.value < 8
  })

  const classScroll = useWatch(disabled, data => {
    data.value = {
      'd-scrollbar': true,
      'status-disabled': disabled.value
    }
  })

  if (width.value === -1) {
    setWidth().then(
      /**
       * @param {number} value
       */
      value => {
        width.value = value
      }
    )
  }

  return { classScroll }
}
