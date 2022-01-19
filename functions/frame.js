export default function frame (
  callback,
  next = () => false,
  end = null
) {
  requestAnimationFrame(() => {
    callback()

    if (next()) {
      frame(callback, next, end)
    } else if (end) {
      end()
    }
  })
}
