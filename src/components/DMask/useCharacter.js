import { ref } from 'vue'
import { useWatch } from '@/uses/useWatch'

export const useCharacter = function (
  input,
  mask,
  value,
  match
) {
  const character = ref([])

  const ifSpecialChar = char => char === '*'
  const charMask = selection => mask.value?.[selection]

  const resetStandard = data => {
    const value = []
    let stop
    let key = 0

    if (character.value.length > 0) {
      mask.value.forEach(char => {
        if (!stop) {
          if (!ifSpecialChar(char)) {
            value.push(char)
          } else if (key in character.value) {
            value.push(character.value[key++])
          } else {
            stop = true
          }
        }
      })
    }

    data.value = value.join('')
  }

  const standard = useWatch([mask, character], resetStandard, ['mounted'], value.value || '')

  const valueToCharacter = selection => {
    let value = -1

    mask.value.forEach((char, index) => {
      if (index <= selection && ifSpecialChar(char)) {
        value++
      }
    })

    return value
  }
  const characterToValue = selection => {
    let selectionChar = -1
    let value

    mask.value.forEach((char, index) => {
      if (ifSpecialChar(char)) {
        selectionChar++
      }

      if (value === undefined && selectionChar > selection) {
        value = index
      }
    })

    return value || mask.value.length
  }

  const goSelection = selection => requestAnimationFrame(() => {
    input.value.selectionEnd = selection
    input.value.selectionStart = selection
  })

  const setCharacter = (selection, char) => {
    character.value.splice(selection, 0, char)
    resetStandard(standard)
  }
  const popCharacter = selection => {
    character.value.splice(selection, 1)
    resetStandard(standard)
  }
  const resetCharacter = value => {
    const data = []

    if (value) {
      value.split('').forEach((char, selection) => {
        if (charMask(selection) === '*') {
          data.push(char)
        }
      })
    }

    character.value = data
  }

  const setValue = (selection, char) => {
    const wait = charMask(selection)

    if (wait) {
      if (ifSpecialChar(wait)) {
        if (char.toString().match(match.value)) {
          const selectionChar = valueToCharacter(selection)
          setCharacter(selectionChar, char)
          goSelection(characterToValue(selectionChar))
        }
      } else {
        setValue(selection + 1, char)
      }
    }
  }
  const pasteValue = (selection, value) => {
    let index = valueToCharacter(selection)
    value.split('').forEach(char => setValue(characterToValue(index++), char))
  }
  const popValue = (selection, go = true) => {
    const index = selection - 1

    if (
      mask.value.length >= selection &&
      (go || ifSpecialChar(charMask(index)))
    ) {
      const selectionChar = valueToCharacter(index)

      popCharacter(selectionChar)
      goSelection(characterToValue(selectionChar - 1))
    }
  }

  return {
    standard,
    resetCharacter,
    setValue,
    pasteValue,
    popValue
  }
}
