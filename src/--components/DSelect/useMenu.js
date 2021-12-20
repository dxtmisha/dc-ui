import { readonly, toRefs } from 'vue'

export default function useMenu (props, propList) {
  const refs = toRefs(props)
  const bindMenu = readonly({
    list: propList,
    listInit: refs.listInit,
    translation: refs.translation,
    keyText: refs.keyText,
    keyValue: refs.keyValue,
    ajax: refs.ajax,
    request: refs.request,
    cache: refs.cache,
    multiple: refs.multiple,
    maxlength: refs.maxlength,
    selected: refs.value,
    readonly: refs.readonly,
    disabled: refs.disabled,
    palette: refs.palette,
    color: refs.color,
    tag: 'span',
    appearance: refs.menuAppearance,
    size: refs.menuSize,
    shape: refs.menuShape,
    width: refs.menuWidth,
    axis: 'y'
  })

  return { bindMenu }
}
