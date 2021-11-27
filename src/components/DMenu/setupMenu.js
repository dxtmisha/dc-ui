import { useRefs } from '@/uses/useRefs'

export const setupMenu = function (
  props
) {
  const bindMenu = useRefs({
    ...props,
    selected: props.value,
    appearance: props.menuAppearance,
    size: props.menuSize,
    shape: props.menuShape,
    width: props.menuWidth
  }, [
    'list',
    'listInit',
    'translation',
    'keyText',
    'keyValue',
    'ajax',
    'request',
    'cache',
    'multiple',
    'maxlength',
    'selected',
    'disabled',
    'palette',
    'color',
    'appearance',
    'size',
    'shape',
    'ripple',
    'axis',
    'width',
    'indent'
  ])

  return { bindMenu }
}
