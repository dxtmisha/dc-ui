import { computed, toRefs } from 'vue'
import setValues from './../../functions/setValues'
import useWatch from '../../uses/useWatch'

export default function useSelected (
  props,
  object,
  context
) {
  const { selected } = toRefs(props)

  const ifValue = () => Array.isArray(propSelected.value)
    ? propSelected.value.length > 0
    : [undefined, null].indexOf(propSelected.value) === -1

  const propSelected = useWatch(selected, () => props.selected, ['init'])
  const items = computed(() => ifValue() && object.value ? object.value.getSelected(propSelected.value) : undefined)
  const names = computed(() => ifValue() && object.value ? object.value.getNames(propSelected.value) : undefined)

  const emit = (event = undefined) => context.emit('on-input', event || {
    value: propSelected.value,
    items: items.value,
    names: names.value
  })
  const set = value => {
    propSelected.value = setValues(
      propSelected.value,
      value,
      !!props.multiple,
      props.maxlength
    )
  }
  const cancel = () => {
    propSelected.value = undefined
    emit()
  }

  const onInput = (event) => {
    if (
      props.listInit &&
      !props.readonly
    ) {
      set(event.value)
      emit()
    } else {
      emit(event)
    }
  }

  return {
    propSelected,
    items,
    names,
    cancel,
    onInput
  }
}
