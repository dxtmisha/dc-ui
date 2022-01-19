import { computed, ref, watch } from 'vue'
import forEach from './../../functions/forEach'
import useWatch from '../../uses/useWatch'

export default function useValue (
  input,
  props,
  geo,
  view,
  standard,
  setDate,
  context
) {
  let date
  const propValue = computed(() => {
    if (props.type === 'text') {
      date = undefined
      return standard.value
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
        return geo.value.toStandard()
      } else {
        return ''
      }
    }
  })

  const validationCode = ref(undefined)
  const validationMessage = ref('')

  const checkDate = () => {
    if (date) {
      let error = false
      const code = {}
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
            error = true
            code[key] = true
          }
        }
      })

      if (error) {
        validationCode.value = code
      }
    }
  }
  const checkValidity = () => {
    const check = input.value?.checkValidity()

    validationCode.value = undefined
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
