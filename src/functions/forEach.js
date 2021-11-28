export default function forEach (data, callback) {
  if (data && typeof data === 'object') {
    let values = null

    if ('forEach' in data) {
      values = []
      data.forEach((item, key) => values.push(callback(item, key, data)))
    } else {
      values = {}
      Object.entries(data).forEach(([key, item]) => {
        values[key] = callback(item, key, data)
      })
    }

    return values
  } else {
    return null
  }
}
