export default function isSelected (value, selected) {
  if (Array.isArray(selected)) {
    return selected.indexOf(value) !== -1
  } else if (value === undefined) {
    return false
  } else {
    return value === selected
  }
}
