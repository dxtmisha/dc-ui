import { useWatch } from '@/uses/useWatch'

export const useValue = function (
  input,
  character,
  mask,
  ifSpecialChar
) {
  const propValue = useWatch([character, mask], data => {
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
    console.log('data.value', data.value)
  }, [], '', true)
  const sample = useWatch([character, mask], data => {
  })

  const change = useWatch(standard, data => {
    if (input.value) {
      input.value.value = standard.value

      // emit()
      data.value = true
    }
  }, [])

  return {
    propValue,
    standard,
    sample,
    change
  }
}
