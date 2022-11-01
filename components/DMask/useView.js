import { computed } from 'vue'

export default function useView (
  props,
  view,
  standard,
  validationCode
) {
  const propChars = computed(() => {
    const values = standard.value.split('')
    const data = []

    view.value.forEach((char, index) => {
      let type = 'mask'
      let text = char

      if (standard.value && index in values) {
        text = values[index]
        type = char.toString().match(/^(\*|y|m|d|H|M)$/) ? 'character' : 'passed'
      } else if (text === '*') {
        text = props.viewSpecial
      }

      if (
        props.viewPlaceholder ||
        index < values.length
      ) {
        data.push({
          class: `d-mask__${type}${validationCode.value && char in validationCode.value ? ' status-error' : ''}`,
          text
        })
      }
    })

    return data
  })

  return {
    propChars
  }
}
