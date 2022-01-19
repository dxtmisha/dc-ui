import List from '../../../classes/List'
import { ref } from 'vue'
import forEach from '../../../functions/forEach'
import goFunction from '../../../functions/goFunction'

export const useOptions = function (options) {
  const valueOptions = ref([])
  const valueData = ref({})

  const setData = (index, value) => {
    valueData.value[index] = value
  }
  const setValue = (item, value) => {
    let data

    if ('list' in item) {
      data = value
    } else if ('message' in item) {
      data = value ? item.message : undefined
    } else {
      data = value
    }

    setData(item.value, data)
  }

  const initOptions = () => {
    const data = []

    if (options.value) {
      forEach(options.value, (value, text) => {
        const valueDefault = goFunction(value.default)

        data.push({
          text: value.value || text,
          value: text,
          ...value,
          default: valueDefault === -1 ? undefined : valueDefault
        })
      })
    }

    valueOptions.value = new List(data, true, ['text', 'subtitle']).get()
  }
  const initData = () => valueOptions.value.forEach(item => {
    if ('default' in item) {
      setValue(item, item.default)
    }
  })

  initOptions()
  initData()

  return {
    valueOptions,
    valueData,
    setData,
    setValue
  }
}
