import { ref, watch } from 'vue'
import { forEach } from '@/tool/functions'
import { useWatch } from '@/uses/useWatch'

export const useValue = function (
  input,
  geo,
  standard,
  view,
  type,
  setDate,
  context
) {
  let date
  const propValue = useWatch(standard, data => {
    if (type.value === 'text') {
      date = undefined
      data.value = standard.value
    } else {
      let meaning = false
      const read = standard.value.split('')

      date = {
        y: '',
        m: '',
        d: '',
        H: '',
        M: ''
      }

      view.value.forEach((char, index) => {
        if (char in date && index in read) {
          meaning = true
          date[char] += read[index]
        }
      })

      if (meaning) {
        setDate(date)
        data.value = geo.value.toStandard()
      } else {
        data.value = ''
      }
    }
  }, ['go'], '')

  const validationCode = ref({})
  const validationMessage = ref(undefined)

  const checkDate = () => {
    if (date) {
      const validation = {
        y: [1000, 2999],
        m: [1, 12],
        d: [1, geo.value.getMaxDay()],
        H: [0, 23],
        M: [0, 59]
      }

      forEach(date, (item, key) => {
        if (
          (key === 'y' && item.match(/^([0-9]{4})$/)) ||
          (key !== 'y' && item.match(/^([0-9]{2})$/))
        ) {
          const value = parseInt(item)

          if (!(value >= validation[key][0] && value <= validation[key][1])) {
            validationCode.value[key] = true
          }
        }
      })
    }
  }
  const checkValidity = () => {
    const check = input.value?.checkValidity()

    validationCode.value = {}
    validationMessage.value = input.value?.validationMessage

    if (!check) {
      checkDate()
    }

    return check
  }

  const emit = (type = 'on-input') => requestAnimationFrame(() => {
    context.emit(type, {
      value: propValue.value,
      validation: checkValidity(),
      validationMessage: validationMessage.value
    })
  })
  const change = useWatch(standard, data => {
    if (input.value) {
      emit()
      data.value = true
    }
  }, [])

  watch(change, (change) => {
    if (!change) {
      emit('on-change')
    }
  })

  return {
    propValue,
    validationCode,
    validationMessage,
    change,
    checkValidity
  }
}
