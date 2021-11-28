import { ref, watch } from 'vue'
import { useWatch } from '@/--uses/useWatch'

const EVENT_DEFAULT = 'on-input'

export const setupInput = function (
  input,
  menu,
  item,
  value,
  name,
  validationMessage,
  context
) {
  const checkValidity = () => {
    const check = input.value?.checkValidity()
    propValidationMessage.value = change.value
      ? (validationMessage.value || input.value?.propValidationMessage || input.value?.validationMessage || '')
      : ''

    return check
  }

  const propValue = useWatch(value, data => {
    data.value = value.value || ''
    requestAnimationFrame(checkValidity)
  })
  const propCounter = useWatch(propValue, data => {
    data.value = propValue.value?.length || 0
  })
  const propValidationMessage = ref(undefined)
  const change = ref(!!validationMessage.value)

  const emit = (type = EVENT_DEFAULT) => {
    context.emit(type, {
      type,
      item: item?.value,
      value: propValue.value,
      name: name.value,
      validation: checkValidity(),
      validationMessage: validationMessage.value
    })
  }
  const emitFrame = (type = EVENT_DEFAULT) => requestAnimationFrame(() => emit(type))

  const set = event => {
    const value = 'value' in event ? event.value : (input.value?.value || '')

    propValue.value = !Array.isArray(value)
      ? value
      : value.length > 0 ? value : ''
  }
  const cancel = () => {
    propValue.value = ''
    emit()
  }

  const onInput = event => {
    set(event)
    emit()
  }
  const onChange = () => {
    change.value = true
    emit('on-change')
  }
  const onChecked = () => {
    change.value = true
    propValue.value = !!input.value.checked
    emit()
  }
  const onSelect = event => {
    change.value = true
    set(event)
    emitFrame()
  }
  const onCancel = () => {
    change.value = true

    if (input.value && 'cancel' in input.value) {
      input.value.cancel()
    } else if (menu.value && 'cancel' in menu.value) {
      menu.value.cancel()
    } else {
      propValue.value = ''
      emitFrame()
    }
  }
  const onCancelValue = event => {
    change.value = true

    if (menu.value && 'onInput' in menu.value) {
      menu.value.onInput(event)
    }
  }

  watch(validationMessage, () => {
    change.value = true
    checkValidity()
  })

  return {
    propValue,
    propCounter,
    propValidationMessage,
    change,
    emit,
    checkValidity,
    cancel,
    onInput,
    onChange,
    onChecked,
    onSelect,
    onCancel,
    onCancelValue
  }
}
