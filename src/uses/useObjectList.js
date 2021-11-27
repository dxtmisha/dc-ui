import List from '@/classes/List'
import { ref } from 'vue'
import { useWatch } from '@/uses/useWatch'

export const useObjectList = function (
  list,
  listInit,
  translation,
  keyText,
  keyValue,
  ajax,
  request,
  cache
) {
  const object = ref(undefined)
  const buffer = useWatch([
    list,
    ajax
  ], data => {
    data.value = undefined
  })
  const progress = ref(false)
  const group = ref({})

  const getObject = (list) => {
    if (list instanceof List) {
      return list
    } else {
      return new List(
        list,
        ajax.value || listInit.value,
        translation.value,
        keyText.value,
        keyValue.value
      )
    }
  }

  const beforeOpening = async (open) => {
    if (open && (buffer.value === undefined || (ajax.value && !cache.value))) {
      let data = list.value

      if (ajax.value) {
        progress.value = true
        data = await (await fetch(ajax.value, request.value || {})).json()

        progress.value = false
      }

      object.value = getObject(data)
      buffer.value = object.value.get()
      group.value = object.value.getGroup()
    }

    return true
  }

  const onGroup = ({
    value,
    open
  }) => {
    object.value.setGroupItem(value, open)
    group.value = object.value.getGroup()
  }

  beforeOpening(true).then()

  return {
    object,
    buffer,
    progress,
    group,
    beforeOpening,
    onGroup
  }
}
