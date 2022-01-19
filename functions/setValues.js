export default function setValues (
  selected,
  value,
  multiple = true,
  maxlength = undefined
) {
  let data

  if (multiple) {
    if (Array.isArray(selected)) {
      const key = selected.indexOf(value)

      if (key !== -1) {
        selected.splice(key, 1)
      } else if (!maxlength || selected.length < maxlength) {
        selected.push(value)
      }

      data = [...selected]
    } else if (selected === value) {
      data = []
    } else if (selected) {
      data = [selected, value]
    } else {
      data = [value]
    }
  } else {
    data = value
  }

  return data
}
