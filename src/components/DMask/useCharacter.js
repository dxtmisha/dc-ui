import { useWatch } from '@/uses/useWatch'

export const useCharacter = function (
  input,
  geo,
  mask,
  value,
  match
) {
  const ifSpecialChar = char => char === '*'
  const charMask = selection => mask.value?.[selection]
  const goSelection = selection => requestAnimationFrame(() => {
    input.value.selectionEnd = selection
    input.value.selectionStart = selection
  })

  const character = useWatch([mask, value], data => {
    data.value = []

    if (value.value) {
      const chars = geo.value ? geo.value.setValue(value.value).toString() : value.value
      chars.split('').forEach((char, selection) => {
        if (charMask(selection) === '*') {
          data.value.push(char)
        }
      })
    }
  })
  const standard = useWatch(character, data => {
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

    if (input.value) {
      input.value.value = data.value
    }
  }, ['go'], '', true)

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

  const setCharacter = (selection, char) => character.value.splice(selection, 0, char)
  const popCharacter = selection => character.value.splice(selection, 1)

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
  const cancel = () => {
    character.value = []
    console.log('character.value', character.value)
  }

  return {
    standard,
    setValue,
    pasteValue,
    popValue,
    cancel
  }
}
