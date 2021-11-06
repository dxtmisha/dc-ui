/**
 * @param {Array|Object} data
 * @param {Function} callback Функция, которая будет вызвана для каждого элемента массива
 * @returns {*}
 */
export const forEach = function (data, callback) {
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

/**
 * Возвращает массив из значений одного столбца входного массива
 * @param {Array|Object} array Многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param {String} column Ключ столбца, значения которого нужно вернуть
 * @returns {*}
 */
export const getColumn = function (array, column) {
  return forEach(array, item => item?.[column])
}

export const goFunction = function (item) {
  return typeof item === 'function' ? item() : item
}

export const isSelected = function (value, selected) {
  if (Array.isArray(selected)) {
    return selected.indexOf(value) !== -1
  } else if (value === undefined) {
    return false
  } else {
    return value === selected
  }
}
