import { computed, toRefs, watch } from 'vue'
import setValues from './../../functions/setValues'
import useWatch from '../../uses/useWatch'

export default function useSelected (
  props,
  object,
  context
) {
  const {
    selected,
    modelValue
  } = toRefs(props)

  const ifValue = () => Array.isArray(propSelected.value)
    ? propSelected.value.length > 0
    : [undefined, null].indexOf(propSelected.value) === -1

  const propSelected = useWatch([selected, modelValue], () => props.selected || props.modelValue, ['init'])
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
      props.maxlength,
      props.isNone
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

  watch(propSelected, value => {
    context.emit('update:selected', value)
    context.emit('update:modelValue', value)
  })

  return {
    propSelected,
    items,
    names,
    cancel,
    onInput
  }
}
