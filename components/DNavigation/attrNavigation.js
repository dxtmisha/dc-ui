import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrNavigation ({
  props,
  pointer = [
    'title',
    'list',
    'listInit',
    'translation',
    'keyText',
    'keyValue',
    'content',
    'open',
    'selected',
    'appearance',
    'width',
    'shape',
    'adaptive',
    'navigationRail',
    'src',
    'back',
    'close',
    'right',
    'bottom',
    'itemAppearance',
    'itemSize',
    'itemShape',
    'itemRipple',
    'itemMenuAttrs',
    'itemAttrs',
    'iconChevronLeft',
    'iconClose',
    'iconBackground',
    'iconAttrs'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'navigation',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
