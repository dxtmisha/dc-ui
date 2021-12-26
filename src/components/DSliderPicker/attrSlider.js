import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DSliderPicker/props'

export default function attrSlider ({
  props,
  pointer = [
    'value',
    'marks',
    'marksInit',
    'translation',
    'keyText',
    'keyValue',
    'step',
    'min',
    'max',
    'multiple',
    'minimumDistance',
    'disabled',
    'palette',
    'color',
    'appearance',
    'vertical',
    'magnet',
    'ripple'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'slider',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
