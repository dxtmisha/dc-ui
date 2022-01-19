import { ref, toRefs } from 'vue'
import forEach from './../../functions/forEach'
import useWatch from './../../uses/useWatch'

export default function useFields (props) {
  const {
    fields,
    values,
    progress,
    options
  } = toRefs(props)

  let body
  const files = ref({})
  const items = ref({})

  const read = fields => {
    const data = {}

    forEach(fields, (item, key) => {
      if (typeof item === 'object') {
        if (item?.name) {
          data[key] = {
            ...options.value,
            ...item
          }
        } else {
          data[key] = read(item)
        }
      } else {
        data[key] = item
      }
    })

    return data
  }
  const propFields = useWatch([fields, options], data => {
    data.value = read(fields.value)
    items.value = {}
  })

  const propProgress = useWatch(progress, data => {
    data.value = progress.value
  })
  const propValues = useWatch(values, data => {
    data.value = values.value || {}
  })

  const getBody = () => body
  const setValue = (name, value) => {
    body.append(name, typeof value === 'object' ? JSON.stringify(value) : value)
    propValues.value[name] = value
  }
  const setFile = (name, file) => {
    const index = `file_${name}`

    if (file instanceof File) {
      body.append(index, file, file.name)
    } else {
      forEach(file, item => body.append(`${index}[]`, item, item.name))
    }

    files.value[name] = file
  }

  const update = () => {
    body = new FormData()
    files.value = {}
    propValues.value = {}

    forEach(items.value, ({ el }) => {
      if ('files' in el) {
        setFile(el.name, el.files)
      }

      if ('propValue' in el) {
        setValue(el.name, el.propValue)
      }
    })
  }

  return {
    propFields,
    propProgress,
    propValues,
    files,
    items,
    getBody,
    update
  }
}
