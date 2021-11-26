import { ref, watch } from 'vue'
import { useWatch } from '@/uses/useWatch'

const EVENT_DEFAULT = 'on-input'

export const setupInput = function (
  input,
  item,
  value,
  name,
  validationMessage,
  context
) {
  const checkValidity = () => {
    const check = input.value?.checkValidity()
    propValidationMessage.value = change.value
      ? (validationMessage.value || input.value?.propValidationMessage || input.value?.validationMessage)
      : undefined

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
      item: item.value,
      value: propValue.value,
      name: name.value,
      validation: checkValidity(),
      validationMessage: validationMessage.value
    })
  }
  const emitFrame = (type = EVENT_DEFAULT) => requestAnimationFrame(() => emit(type))

  const cancel = () => {
    propValue.value = ''
    emit()
  }

  const onInput = event => {
    propValue.value = 'value' in event ? event.value : (input.value?.value || '')
    emit()
  }
  const onChange = () => {
    change.value = true
    emit('on-change')
  }
  const onCancel = () => {
    change.value = true

    if (input.value && 'cancel' in input.value) {
      input.value.cancel()
    } else {
      propValue.value = ''
      emitFrame()
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
    onCancel
  }
}
