import { readonly, toRefs } from 'vue'

export default function useButton (props, context) {
  const refs = toRefs(props)
  const bindButton = readonly({
    item: refs.item,
    value: refs.value,
    text: refs.text,
    selected: refs.selected,
    disabled: refs.disabled,
    palette: refs.palette,
    color: refs.color,
    tag: refs.tag,
    appearance: refs.appearance,
    size: refs.size,
    shape: refs.shape,
    align: refs.align,
    adaptive: refs.adaptive,
    lowercase: refs.lowercase,
    dense: refs.dense,
    icon: refs.icon,
    iconActive: refs.iconActive,
    iconTrailing: refs.iconArrowDown,
    iconBackground: refs.iconBackground,
    ...context.attrs
  })

  return { bindButton }
}
