import { forEach } from '@/--tool/functions'
import { useWatch } from '@/--uses/useWatch'

export const useClasses = function (classes) {
  const watch = []

  forEach(classes, item => {
    if (typeof item === 'object' && 'value' in item) {
      watch.push(item)
    } else {
      forEach(item, value => watch.push(value))
    }
  })

  return useWatch(watch, data => {
    data.value = {}

    forEach(classes, (item, index) => {
      switch (index) {
        case 'values':
          forEach(item, (value, name) => {
            data.value[`${name}-${value.value}`] = value.value
          })
          break
        case 'view':
        case 'status':
        case 'option':
          forEach(item, (value, name) => {
            data.value[`${index}-${name}`] = value.value
          })
          break
        default:
          if (typeof item === 'boolean') {
            data.value[index] = item
          } else {
            forEach(item.value, (value, name) => {
              data.value[name] = value
            })
          }
          break
      }
    })
  })
}
