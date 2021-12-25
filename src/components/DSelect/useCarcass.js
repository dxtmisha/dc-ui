import { computed, toRefs } from 'vue'
import attrField from '@/components/DCarcassField/attrField'

export default function useCarcass (
  props,
  context,
  propValidationMessage,
  propValue,
  propCounter
) {
  const { iconArrowDown } = toRefs(props)

  const propCancel = computed(() => !props.multiple && props.cancel)
  const filled = computed(() => !!propValue.value)

  return attrField({
    props,
    items: {
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active: filled,
      filled,
      cancel: propCancel,
      iconTrailing: iconArrowDown
    },
    attrs: context.attrs
  })
}
