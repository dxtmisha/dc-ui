import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DCarcassField/props'

export default function attrField ({
  props,
  pointer = [
    'text',
    'prefix',
    'suffix',
    'helperMessage',
    'validationMessage',
    'maxlength',
    'required',
    'selected',
    'turn',
    'readonly',
    'disabled',
    'palette',
    'color',
    'appearance',
    'size',
    'shape',
    'align',
    'adaptive',
    'arrow',
    'counter',
    'cancel',
    'ripple',
    'icon',
    'iconActive',
    'iconTrailing'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'field',
    pointer,
    props: main,
    original: props,
    items,
    attrs
  })
}
