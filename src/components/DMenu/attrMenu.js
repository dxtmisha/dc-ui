import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DMenu/props'

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
