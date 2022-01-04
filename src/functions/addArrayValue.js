import forEach from '@/functions/forEach'

export default function addArrayValue (array, values) {
  const data = array instanceof Object ? array : {}

  if (values instanceof Object) {
    forEach(values, (item, index) => {
      if (
        (item instanceof Object) &&
        (index in data)
      ) {
        addArrayValue({ ...data[index] }, item)
      } else {
        data[index] = item
      }
    })
  }

  return data
}
