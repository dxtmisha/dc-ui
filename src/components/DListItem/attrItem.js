import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DListItem/props'

export default function attrItem ({
  props,
  pointer = [
    'palette',
    'color',
    'tag',
    'appearance',
    'size',
    'shape',
    'adaptive',
    'navigationRail',
    'dense',
    'border',
    'ripple',
    'iconAnimationShow',
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
