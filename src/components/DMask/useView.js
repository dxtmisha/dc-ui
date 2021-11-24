import { onMounted, onUpdated, watch } from 'vue'
import { createElement, forEach } from '@/tool/functions'

export const useView = function (
  input,
  chars,
  viewSpecial,
  standard,
  view,
  validationCode
) {
  const resetChar = () => {
    if (chars.value) {
      const values = standard.value.split('')

      view.value.forEach((char, index) => {
        let type = 'mask'
        let text = char
        const element = chars.value.children[index]

        if (standard.value && index in values) {
          text = values[index]
          type = char.toString().match(/^(\*|y|m|d|H|M)$/) ? 'character' : 'passed'
        } else if (text === '*') {
          text = viewSpecial.value
        }

        const className = `d-mask__${type}${char in validationCode.value ? ' status-error' : ''}`

        if (element) {
          if (element.innerText !== text) {
            element.innerText = text
          }

          if (element.className !== className) {
            element.className = className
          }
        } else {
          createElement(chars.value, 'span', element => {
            element.innerText = text
            element.className = className
          })
        }
      })

      if (chars.value.children.length > view.value.length) {
        forEach(chars.value.children, (item, index) => {
          if (index >= view.value.length) {
            chars.value.removeChild(item)
          }
        })
      }
    }
  }

  const resetView = () => {
    if (input.value.value !== standard.value) {
      input.value.value = standard.value
    }

    resetChar()
  }

  watch(validationCode, resetView)

  onMounted(resetView)
  onUpdated(resetView)

  return {}
}
