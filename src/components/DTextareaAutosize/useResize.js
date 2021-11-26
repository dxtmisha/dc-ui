import { onMounted, watch } from 'vue'

export const useResize = function (
  input,
  clone,
  value,
  propValue
) {
  const updateHeight = () => {
    clone.value.innerText = `${propValue.value} --`
    input.value.style.height = `${clone.value.offsetHeight}px`
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

  watch(value, () => reSize(false))
  watch(propValue, updateHeight)

  onMounted(reSize)

  return { reSize }
}
