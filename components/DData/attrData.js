import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrData ({
  props,
  pointer = [
    'headers',
    'headersInit',
    'translation',
    'keyText',
    'keyValue',
    'underline',
    'palette',
    'color',
    'appearance',
    'size',
    'shape',
    'adaptive',
    'sticky',
    'dense',
    'column',
    'border',
    'iconBackground',
    'iconAttrs'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'data',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
