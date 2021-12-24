import { toRefs } from 'vue'
import attrField from '@/--components/DCarcassField/attrField'

export default function useCarcass (
  props,
  context,
  propValidationMessage,
  propCounter,
  propCancel,
  filled
) {
  const refs = toRefs(props)
  return attrField(props, {
    ...refs,
    validationMessage: propValidationMessage,
    counterValue: propCounter,
    active: filled,
    filled,
    cancel: propCancel
  }, { ...context.attrs })
}
