import { ref } from 'vue'
import { optionsList } from '@/media/demo/options'
import List from '@/classes/List'

export const useOptions = function (options) {
  const valueOptions = ref([])
  const valueData = ref({})

  const setData = (index, value) => {
    valueData.value[index] = value
  }
  const setValue = (item, value) => {
    let data

    if ('list' in item) {
      data = value || undefined
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
      options.value.forEach(value => {
        if (typeof value !== 'string') {
          data.push(value)
        } else if (value in optionsList) {
          data.push({
            ...optionsList[value],
            value
          })
        }
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
