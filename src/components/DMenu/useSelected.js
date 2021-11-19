import { setValues } from '@/tool/functions'
import { useWatch } from '@/uses/useWatch'
import { ref } from 'vue'

export const useSelected = function (
  listInit,
  multiple,
  maxlength,
  selected,
  object,
  context
) {
  const propSelected = useWatch(selected, data => {
    data.value = selected.value
  })

  const items = ref(undefined)
  const names = ref(undefined)

  const ifValue = () => Array.isArray(propSelected.value) ? propSelected.value.length > 0 : propSelected.value

  const set = (value) => {
    propSelected.value = setValues(
      propSelected.value,
      value,
      multiple.value,
      maxlength.value
    )

    if (ifValue()) {
      items.value = object.value.getSelected(propSelected.value)
      names.value = object.value.getNames(propSelected.value)
    } else {
      items.value = undefined
      names.value = undefined
    }
  }

  const onInput = (event) => {
    if (listInit.value) {
      set(event.value)
      context.emit('on-input', {
        value: propSelected.value,
        items: items.value,
        names: names.value
      })
    } else {
      context.emit('on-input', event)
    }
  }

  return {
    propSelected,
    items,
    names,
    onInput
  }
}
