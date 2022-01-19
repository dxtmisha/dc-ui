export default function (array, value) {
  const index = array.indexOf(value)

  if (index !== -1) {
    array.splice(index, 1)
    return false
  } else {
    array.push(value)
    return true
  }
}
