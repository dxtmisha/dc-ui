import { ref } from 'vue'
import forEach from './../../functions/forEach'

export default function useValidity (
  form,
  items,
  context
) {
  const propValidationMessage = ref({})
  const success = ref(undefined)
  const error = ref(undefined)

  const emitValidity = () => {
    context.emit('on-validity', {
      items: items.value,
      validationMessage: propValidationMessage.value
    })
  }

  const goScroll = el => el.$el.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })

  const checkValidity = () => {
    let first
    const check = form.value.checkValidity()
    propValidationMessage.value = {}

    if (!check) {
      forEach(items.value, ({
        item,
        el
      }) => {
        if ('checkValidity' in item) {
          el.propValidationMessage = item.checkValidity() || ''
        } else if ('checkValidity' in el) {
          el.setChange()
          el.checkValidity()
        }

        if (el.propValidationMessage) {
          propValidationMessage.value[el.name] = el.propValidationMessage

          if (!first) {
            goScroll(first = el)
          }
        }
      })

      emitValidity()
    }

    return check
  }
  const setValidity = data => {
    if (data?.validationMessage) {
      let first

      forEach(data.validationMessage, (message, index) => {
        const el = items.value?.[index].el

        if (el) {
          el.propValidationMessage = message

          if (!first) {
            goScroll(first = el)
          }
        }
      })

      propValidationMessage.value = data.validationMessage
    }

    success.value = data?.success
    error.value = data?.error
  }

  return {
    propValidationMessage,
    success,
    error,
    checkValidity,
    setValidity
  }
}
