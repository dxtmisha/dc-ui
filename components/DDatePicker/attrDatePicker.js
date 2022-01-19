import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrDatePicker ({
  props,
  pointer = [
    'value',
    'min',
    'max',
    'multiple',
    'switchDate',
    'locales'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'picker',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
