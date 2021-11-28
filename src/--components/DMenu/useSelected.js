import { setValues } from '@/--tool/functions'
import { useWatch } from '@/--uses/useWatch'
import { onBeforeMount, ref } from 'vue'

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
  const resetItems = () => object.value && ifValue() ? object.value.getSelected(propSelected.value) : undefined
  const resetNames = () => object.value && ifValue() ? object.value.getNames(propSelected.value) : undefined
  const emit = (event = undefined) => {
    context.emit('on-input', event || {
      value: propSelected.value,
      items: items.value,
      names: names.value
    })
  }

  const set = value => {
    propSelected.value = setValues(
      propSelected.value,
      value,
      multiple.value,
      maxlength.value
    )

    items.value = resetItems()
    names.value = resetNames()
  }
  const cancel = () => {
    propSelected.value = undefined
    items.value = undefined
    names.value = undefined

    emit()
  }

  const onInput = (event) => {
    set(event.value)
    emit()
  }

  onBeforeMount(() => {
    items.value = resetItems()
    names.value = resetNames()
  })

  return {
    propSelected,
    items,
    names,
    cancel,
    onInput
  }
}
