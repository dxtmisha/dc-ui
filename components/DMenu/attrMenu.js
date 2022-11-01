import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrMenu ({
  props,
  pointer = [
    'list',
    'listInit',
    'translation',
    'keyText',
    'keyValue',
    'ajax',
    'request',
    'cache',
    'isNone',
    'maxlength',
    'multiple',
    'readonly',
    'disabled',
    'palette',
    'color',
    'ripple'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'menu',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
