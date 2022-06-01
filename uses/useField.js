import { computed, ref, toRefs, watch } from 'vue'
import Translation from '../classes/Translation'
import useWatch from './useWatch'

const EVENT_DEFAULT = 'on-input'

export default function useField (
  input,
  menu,
  props,
  context
) {
  const {
    value,
    modelValue,
    validationMessage
  } = toRefs(props)

  const change = ref(!!props.validationMessage)
  const propValidationMessage = ref(props.validationMessage || '')

  const getValidity = () => {
    let validity

    if (
      props?.validationCode &&
      input.value?.validity
    ) {
      for (const index in input.value?.validity) {
        if (
          input.value?.validity[index] &&
          props.validationCode?.[index]
        ) {
          validity = props.validationCode[index]
        }
      }
    }

    return !change.value
      ? ''
      : props.validationMessage ||
      input.value?.propValidationMessage ||
      validity ||
      input.value?.validationMessage ||
      ''
  }
  const checkValidity = () => {
    const check = input.value?.checkValidity()
    propValidationMessage.value = getValidity()

    if (
      change.value &&
      'inputMatch' in props &&
      props.inputMatch &&
      propValidationMessage.value === ''
    ) {
      const inputMatch = input.value?.form?.querySelector(`[name="${props.inputMatch}"]`) ||
        document.querySelector(props.inputMatch)

      if (
        inputMatch &&
        inputMatch.value !== input.value.value
      ) {
        propValidationMessage.value = Translation.get(props.inputMatchText || 'Your entries must match.')
      }
    }

    return check
  }

  const propValue = useWatch([value, modelValue], data => {
    data.value = value.value || modelValue.value || ''
    requestAnimationFrame(checkValidity)
  }, value.value || modelValue.value ? ['go'] : [], '')
  const propCounter = computed(() => propValue.value?.length || 0)

  const valueMin = computed(() => Array.isArray(propValue.value) ? (propValue.value?.[0] || 0) : 0)
  const valueMax = computed(() => Array.isArray(propValue.value) ? (propValue.value?.[1] || 0) : propValue.value)
  const textMin = computed(() => props.treatment ? props.treatment(valueMin.value) : valueMin.value)
  const textMax = computed(() => props.treatment ? props.treatment(valueMax.value) : valueMax.value)
  const textLabel = computed(() => {
    const text = Array.isArray(propValue.value)
      ? propValue.value[0] + (propValue.value[1] ? ` - ${propValue.value[1]}` : '')
      : propValue.value

    return props.treatment ? props.treatment(text) : text
  })

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
    if (!props?.readonly) {
      const value = 'value' in event ? event.value : input.value?.propValue || input.value?.value || ''
      setValue(value)
    }
  }
  const setValue = value => {
    propValue.value = !Array.isArray(value)
      ? value
      : value.length > 0 ? value : ''
  }
  const setChange = () => {
    change.value = true

    if ('setChange' in input.value) {
      input.value.setChange()
    }
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

  watch(propValue, value => {
    context.emit('update:value', value)
    context.emit('update:modelValue', value)
  })

  return {
    change,
    propValidationMessage,
    propValue,
    propCounter,
    valueMin,
    valueMax,
    textMin,
    textMax,
    textLabel,
    checkValidity,
    emit,
    emitFrame,
    set,
    setValue,
    setChange,
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
