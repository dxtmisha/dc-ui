export default function forEach (data, callback) {
  if (data && typeof data === 'object') {
    const values = []

    if ('forEach' in data) {
      data.forEach((item, key) => values.push(callback(item, key, data)))
    } else {
      Object.entries(data).forEach(([key, item]) => values.push(callback(item, key, data)))
    }

    return values
  } else {
    return null
  }
}
