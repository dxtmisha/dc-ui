import { computed, toRefs, watch } from 'vue'
import useWatch from '../../uses/useWatch'

export default function useCharacter (
  input,
  props,
  length,
  geo,
  propMask,
  max
) {
  const {
    value,
    mask
  } = toRefs(props)

  const ifSpecialChar = char => char === '*'
  const charMask = selection => propMask.value?.[selection]
  const goSelection = selection => requestAnimationFrame(() => {
    input.value.selectionEnd = selection
    input.value.selectionStart = selection
  })

  const charSelectionMask = (status = 1) => {
    length.value = character.value.length + status
  }
  const resetValue = value => {
    const data = []

    if (value) {
      if (props.valuePaste) {
        data.push(...value.replace(/[^0-9]+/ig, '').split(''))
      } else {
        const chars = geo.value ? geo.value.setValue(value).toString() : value
        chars.split('').forEach((char, selection) => {
          if (ifSpecialChar(charMask(selection))) {
            data.push(char)
          }
        })
      }
    }

    return data
  }

  const character = useWatch([value], () => resetValue(value.value), ['init'])
  const standard = computed(() => {
    const value = []
    let stop
    let key = 0

    if (character.value.length > 0) {
      propMask.value.forEach(char => {
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

    return value.join('')
  })

  /**
   * @param selection
   * @returns {number}
   */
  const valueToCharacter = selection => {
    let value = -1

    propMask.value.forEach((char, index) => {
      if (index <= selection && ifSpecialChar(char)) {
        value++
      }
    })

    return value
  }
  const characterToValue = selection => {
    let selectionChar = -1
    let value

    propMask.value.forEach((char, index) => {
      if (ifSpecialChar(char)) {
        selectionChar++
      }

      if (value === undefined && selectionChar >= selection) {
        value = index
      }
    })

    return value !== undefined ? value : propMask.value.length
  }

  const setCharacter = (selection, char) => character.value.splice(selection, 0, char)
  const popCharacter = selection => character.value.splice(selection, 1)

  const newValue = (value) => {
    character.value = resetValue(value)
  }
  const setValue = (selection, char, focus = true) => {
    charSelectionMask()

    const wait = charMask(selection)

    if (
      wait &&
      max.value > standard.value.length
    ) {
      if (ifSpecialChar(wait)) {
        if (char.toString().match(props.match)) {
          const selectionChar = valueToCharacter(selection)
          setCharacter(selectionChar, char)

          if (focus) {
            goSelection(characterToValue(selectionChar + 1))
          }

          return true
        }
      } else {
        return setValue(selection + 1, char)
      }
    }

    return false
  }
  const pasteValue = (selection, value, focus = true) => {
    let index = valueToCharacter(selection)

    if (index === -1) {
      index = 0
    }

    value.split('').forEach(char => {
      if (char.toString().match(props.match)) {
        setValue(characterToValue(index++), char, focus)
      }
    })
  }
  const popValue = (selection, go = true) => {
    const index = selection - 1

    if (
      max.value >= selection &&
      (go || ifSpecialChar(charMask(index)))
    ) {
      const selectionChar = valueToCharacter(index)

      popCharacter(selectionChar)
      goSelection(characterToValue(selectionChar))

      charSelectionMask(0)
    }
  }
  const cancel = () => {
    character.value = []
  }

  watch(character, value => {
    length.value = value.length
  })

  watch(mask, () => {
    const start = input.value.selectionStart
    goSelection(start)
  })

  return {
    standard,
    newValue,
    setValue,
    pasteValue,
    popValue,
    cancel
  }
}
