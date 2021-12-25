import { computed } from 'vue/dist/vue'
import useDateTime from '@/uses/useDateTime'

export default function useValue (
  inputIn,
  inputOut,
  props,
  context,
  text
) {
  const {
    propValue,
    valueFocus,
    valueSecondary,
    objectFocus,
    objectSecondary,
    resetDate,
    emit
  } = useDateTime('date', props, context)

  const textValue = computed(() => {
    if (props.multiple) {
      const className = 'd-date-picker__null'
      let start = `<span class="${className}">${text.Start}</span>`
      let end = `<span class="${className}">${text.End}</span>`
      let minus = `<span class="${className}">-</span>`

      if (valueFocus.value) {
        start = objectFocus.value.toLocaleString(undefined, {
          month: 'short',
          day: 'numeric'
        })
      }

      if (valueSecondary.value) {
        minus = '-'
        end = objectSecondary.value.toLocaleString(undefined, {
          month: 'short',
          day: 'numeric'
        })
      }

      return `${start} ${minus} ${end}`
    } else {
      return objectFocus.value.toLocaleString(undefined, {
        month: 'short',
        weekday: 'short',
        day: 'numeric'
      })
    }
  })

  const onSelected = ({ value }) => {
    propValue.value = value
    emit()
  }

  const onInput = event => {
    if (event.validation) {
      if (props.multiple) {
        const valueIn = inputIn.value?.propValue
        const valueOut = inputOut.value?.propValue

        if (
          valueIn &&
          valueOut
        ) {
          propValue.value = [valueIn, valueOut].sort()
        } else if (valueIn) {
          propValue.value = [valueIn]
        } else {
          propValue.value = undefined
        }
      } else {
        propValue.value = inputIn.value.propValue
      }
      emit()
    }
  }

  const onOk = ({ value }) => {
    switch (value) {
      case 'cancel':
        resetDate()
        emit()
        break
      case 'ok':
        emit('on-change')
        break
    }
  }

  return {
    propValue,
    valueFocus,
    valueSecondary,
    textValue,
    onSelected,
    onInput,
    onOk
  }
}
