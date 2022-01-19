import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DTable/props'

export default function attrTable ({
  props,
  pointer = [
    'headers',
    'headersInit',
    'translation',
    'keyText',
    'keyValue',
    'items',
    'sort',
    'dest',
    'readonly',
    'checkbox',
    'size',
    'align',
    'sticky',
    'dense'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'table',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
