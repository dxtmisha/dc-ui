import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrPagination ({
  props,
  pointer = [],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'pagination',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
