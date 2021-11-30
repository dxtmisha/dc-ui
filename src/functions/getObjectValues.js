export default function getObjectValues (object, keys = []) {
  const item = {}

  keys.forEach(key => {
    item[key] = object?.[key]
  })

  return item
}
