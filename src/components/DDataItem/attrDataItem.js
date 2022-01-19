import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DDataItem/props'

export default function attrDataItem ({
  props,
  pointer = [
    'parameters',
    'palette',
    'color',
    'appearance',
    'size',
    'shape',
    'adaptive',
    'dense',
    'border',
    'iconBackground',
    'iconAttrs'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'item',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
