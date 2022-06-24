import GeoPhone from '../../classes/GeoPhone'
import attrMask from '../DMask/attrMask'
import { ref } from 'vue'

export default function useMask (
  props,
  onInput
) {
  const bindMask = attrMask({ props })
  const mask = ref(undefined)
  const code = ref(undefined)

  return {
    bindMask,
    listMask: GeoPhone.getList(),
    mask,
    code,

    onInputMask: event => {
      const info = GeoPhone.getMaskByValue(event.value)

      if (info?.code) {
        mask.value = info?.masksFull
        code.value = info?.code
      }

      onInput(event)
    }
  }
}
