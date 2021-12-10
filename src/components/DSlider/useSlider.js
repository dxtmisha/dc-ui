import { readonly, toRefs } from 'vue'

export default function useSlider (props) {
  const refs = toRefs(props)
  const bindSlider = readonly({
    marks: refs.marks,
    value: refs.value,
    translation: refs.translation,
    keyText: refs.keyText,
    keyValue: refs.keyValue,
    disabled: refs.disabled,
    minimumDistance: refs.minimumDistance,
    multiple: refs.multiple,
    step: refs.step,
    min: refs.min,
    max: refs.max,
    palette: refs.palette,
    color: refs.color,
    appearance: refs.appearance,
    vertical: refs.vertical,
    magnet: refs.magnet,
    ripple: refs.ripple
  })

  return { bindSlider }
}
