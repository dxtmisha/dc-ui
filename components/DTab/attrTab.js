import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrTab ({
  props,
  pointer = [
    'list',
    'listInit',
    'translation',
    'keyText',
    'keyValue',
    'modelValue',
    'appearance',
    'adaptive',
    'navigationRail',
    'dynamic',
    'ripple',
    'itemAttrs',
    'iconBackground'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'tab',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
