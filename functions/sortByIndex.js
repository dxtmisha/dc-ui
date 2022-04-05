export default function sortByIndex (value, index = 'text') {
  if (Array.isArray(value)) {
    value.sort((a, b) => {
      if (a?.[index] < b?.[index]) {
        return -1
      }
      if (a?.[index] > b?.[index]) {
        return 1
      } else {
        return 0
      }
    })
  }
}
