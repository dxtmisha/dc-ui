import GeoPhone from '../../classes/GeoPhone'
import attrMask from '../DMask/attrMask'
import { ref } from 'vue'

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

  const setCountry = (value, masksFull = undefined) => {
    if (value !== code.value) {
      const country = GeoPhone.getInfo(value)

      mask.value = masksFull || country.phoneMaskFull
      code.value = value
      flag.value = country.icon

      return country
    } else {
      return undefined
    }
  }

  return {
    bindMask,
    listMask: GeoPhone.getListSort(),
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
          `${country.phoneCode}${info.phone}`
        )

        requestAnimationFrame(() => input.value?.input?.focus())
      }
    },
    onInputMask: event => {
      const info = GeoPhone.getMaskByValue(event.value)

      if (info?.code) {
        setCountry(info.code)
      }

      onInput(event)
    },
    onClick: () => {
      if (!propValue.value || propValue.value === '') {
        const country = GeoPhone.getInfo(code.value)
        input.value?.pasteValue(
          0,
          country.phoneCode.toString().replace(/[^0-9]+/ig, '')
        )
      }
    }
  }
}
