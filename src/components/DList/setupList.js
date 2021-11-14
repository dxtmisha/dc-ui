import List from '@/classes/List'
import { computed, ref, toRefs, watch } from 'vue'

export const setupList = function (props, context) {
  const {
    // Values
    list,
    listInit,
    translation,
    keyText,
    keyValue,
    ajax,
    cache,
    request,
    multiple,
    maxlength,

    // Status
    selected,
    readonly,
    disabled
  } = toRefs(props)

  const buffer = ref(undefined)
  const progress = ref(undefined)
  const statusSelected = ref(selected.value)

  const objectList = computed(() => {
    if (list.value instanceof List) {
      return list.value
    } else {
      const data = buffer.value || list.value
      const init = ajax.value || listInit.value

      return new List(
        data,
        init,
        translation.value,
        keyText.value,
        keyValue.value
      )
    }
  })
  const ifSelected = computed(() => Array.isArray(statusSelected.value) ? statusSelected.value.length > 0 : !!statusSelected.value)

  const selectedByItem = computed(() => ifSelected.value ? objectList.value.getSelected(statusSelected.value) : undefined)
  const selectedByName = computed(() => ifSelected.value ? objectList.value.getNames(statusSelected.value) : undefined)
  const selectedByValue = computed(() => ifSelected.value ? statusSelected.value : undefined)

  const initFetch = (open) => new Promise((resolve, reject) => {
    if ((cache.value && buffer.value) || !ajax.value || !open) {
      resolve()
    } else if (ajax.value) {
      progress.value = true

      fetch(ajax.value, request.value ? { body: JSON.stringify(request.value) } : undefined)
        .then(async response => {
          buffer.value = (await response.json()) || []
          progress.value = false

          resolve()
        })
        .catch((error) => {
          progress.value = false
          console.log(error)
          reject(error)
        })
    }
  })
  const updateSelected = (value) => {
    if (multiple.value) {
      if (Array.isArray(statusSelected.value)) {
        const old = statusSelected.value.indexOf(value)

        if (old !== -1) {
          statusSelected.value.splice(old, 1)
        } else if (!maxlength.value || statusSelected.value.length < maxlength.value) {
          statusSelected.value.push(value)
        }
      } else if (statusSelected.value === value) {
        statusSelected.value = []
      } else if (statusSelected.value) {
        statusSelected.value = [statusSelected.value, value]
      } else {
        statusSelected.value = [value]
      }
    } else {
      statusSelected.value = value
    }
  }

  const onInput = (event) => {
    if (!disabled.value && !readonly.value) {
      if (listInit.value) {
        updateSelected(event.value)
        context.emit('on-input', {
          value: statusSelected.value,
          selected: statusSelected.value,
          selectedByItem: selectedByItem.value,
          selectedByName: selectedByName.value
        })
      } else {
        context.emit('on-input', event)
      }
    }
  }

  watch(ajax, () => {
    buffer.value = undefined
  })
  watch(selected, (selected) => {
    statusSelected.value = selected
  })

  return {
    progress,
    objectList,
    ifSelected,
    selectedByItem,
    selectedByName,
    selectedByValue,
    initFetch,
    updateSelected,
    onInput
  }
}
