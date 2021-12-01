import { onMounted, toRefs, watch } from 'vue'

export default function useResize (
  input,
  clone,
  propValue,
  props
) {
  const { value } = toRefs(props)

  const updateHeight = () => {
    clone.value.innerText = `${propValue.value} --`
    requestAnimationFrame(() => {
      input.value.style.height = `${clone.value.offsetHeight}px`
    })
  }

  const reSize = (update = true) => {
    const style = getComputedStyle(input.value)

    clone.value.style.paddingTop = style.paddingTop
    clone.value.style.paddingRight = style.paddingRight
    clone.value.style.paddingBottom = style.paddingBottom
    clone.value.style.paddingLeft = style.paddingLeft
    clone.value.style.width = `${input.value.offsetWidth}px`

    if (update) {
      updateHeight()
    }
  }

  watch(value, () => requestAnimationFrame(() => reSize(false)))
  watch(propValue, updateHeight)

  onMounted(reSize)

  return { reSize }
}
