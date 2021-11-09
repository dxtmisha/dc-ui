/**
 * Указывает браузеру на то, что вы хотите произвести анимацию,
 * и просит его запланировать перерисовку на следующем кадре анимации
 * @param {Function} callback Функция, которая будет вызвана, когда придёт время обновить вашу анимацию на следующей перерисовке
 * @param {Function} next
 * @param {Function} end
 */
export const frame = function (
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
