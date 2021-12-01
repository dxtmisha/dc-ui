import { computed, ref, toRefs, watch } from 'vue'
import useWatch from './useWatch'

const EVENT_DEFAULT = 'on-input'

export default function useInput (
  input,
  menu,
  props,
  context
) {
  const {
    value,
    validationMessage
  } = toRefs(props)

  const change = ref(!!props.validationMessage)
  const propValidationMessage = ref(props.validationMessage)
  const checkValidity = () => {
    const check = input.value?.checkValidity()
    propValidationMessage.value = !change.value
      ? ''
      : props.validationMessage || input.value?.propValidationMessage || input.value?.validationMessage || ''

    return check
  }

  const propValue = useWatch(value, data => {
    data.value = value.value || ''
    requestAnimationFrame(checkValidity)
  })
  const propCounter = computed(() => propValue.value?.length || 0)

  const emit = (type = EVENT_DEFAULT) => {
    context.emit(type, {
      type,
      item: props?.item,
      value: propValue.value,
      name: props?.name,
      validation: checkValidity(),
      validationMessage: propValidationMessage.value
    })
  }
  const emitFrame = (type = EVENT_DEFAULT) => requestAnimationFrame(() => emit(type))

  const set = event => {
    const value = 'value' in event ? event.value : input.value?.propValue || input.value?.value || ''

    propValue.value = !Array.isArray(value)
      ? value
      : value.length > 0 ? value : ''
  }
  const cancel = () => {
    propValue.value = ''
  }

  const onEmit = () => emit()
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
    let go

    [
      input?.value,
      menu?.value
    ].forEach(item => {
      if (item && 'cancel' in item) {
        go = true
        item.cancel()
      }
    })

    if (!go) {
      propValue.value = ''
      emitFrame()
    }
  }
  const onCancelValue = event => {
    if (menu && 'onInput' in menu.value) {
      change.value = true
      menu.value.onInput(event)
    }
  }

  if (validationMessage) {
    watch(validationMessage, () => {
      change.value = true
      checkValidity()
    })
  }

  return {
    change,
    propValidationMessage,
    propValue,
    propCounter,
    checkValidity,
    emit,
    set,
    cancel,
    onEmit,
    onInput,
    onChange,
    onChecked,
    onSelect,
    onCancel,
    onCancelValue
  }
}
