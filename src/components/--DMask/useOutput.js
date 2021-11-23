export const useOutput = function (
  chars,
  mask,
  view,
  character,
  ifSpecialChar
) {
  const output = () => {
    let key = 0
    const data = []

    mask.value.forEach((char, index) => {
      let item

      if (ifSpecialChar(char) && (key in character.value)) {
        item = {
          type: 'character',
          char: character.value[key++],
          error: view.value?.[index] === this.validity
        }
      } else {
        item = {
          type: key >= this.character.length ? 'mask' : 'passed',
          char: this.view?.[index],
          error: false
        }
      }

      data.push({
        ...item,
        class: {
          [`d-mask-date__${item.type}`]: item.type,
          'status-error': item.error
        }
      })
    })

    return data
  }
}
