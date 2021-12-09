import { readonly, toRefs } from 'vue'

export default function usePicker (props) {
  const refs = toRefs(props)
  const bindPicker = readonly({
    value: refs.value,
    min: refs.min,
    max: refs.max,
    palette: refs.palette,
    color: refs.color,
    locales: refs.locales,
    format: refs.format
  })

  return { bindPicker }
}
