import GeoPhone from '../../classes/GeoPhone'
import attrMask from '../DMask/attrMask'
import { computed, onMounted, ref } from 'vue'

export default function useMask (
  props,
  input,
  propValue,
  onInput
) {
  const bindMask = attrMask({ props })

  const country = GeoPhone.getInfo()
  const mask = ref(country.phoneMaskFull)
  const code = ref(country.value)
  const flag = ref(country.icon)

  const setStart = () => {
    if (!propValue.value || propValue.value === '') {
      const country = GeoPhone.getInfo(code.value)
      input.value?.pasteValue(
        0,
        country.phoneCode.toString().replace(/[^0-9]+/ig, ''),
        false
      )
    }
  }
  const setCountry = (value, masksFull = undefined) => {
    if (value !== code.value) {
      const country = GeoPhone.getInfo(value)

      if (masksFull === undefined) {
        masksFull = GeoPhone.getMaskByValue(country.phoneMask)?.masksFull
      }

      mask.value = masksFull || country.phoneMaskFull
      code.value = value
      flag.value = country.icon

      return country
    } else {
      return undefined
    }
  }

  onMounted(() => {
    if (props.filling) {
      setStart()
    }
  })

  return {
    bindMask,
    listMask: computed(() => {
      const data = []
      GeoPhone.getListSort().forEach(item => {
        data.push({
          icon: item.icon,
          text: item.text,
          value: item.value,
          suffix: item.suffix
        })
      })

      return data
    }),
    mask,
    code,
    flag,

    setCountry,

    onInputCountry: event => {
      const info = GeoPhone.getMaskByValue(propValue.value)
      const country = setCountry(event.value)

      if (country) {
        input.value?.newValue('')
        input.value?.pasteValue(
          0,
          `${country.phoneCode}${info.phone}`,
          false
        )

        requestAnimationFrame(() => {
          if (input.value?.input) {
            input.value.input.focus()

            requestAnimationFrame(() => {
              input.value.input.selectionEnd = 999
              input.value.input.selectionStart = 999
            })
          }
        })
      }
    },
    onInputMask: event => {
      const info = GeoPhone.getMaskByValue(event.value)

      if (info?.code) {
        setCountry(info.code, info.masksFull)
      }

      onInput(event)
    },
    onClick: event => {
      if (event.target === input.value?.input) {
        setStart()
      }
    }
  }
}
