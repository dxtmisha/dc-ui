import { computed, ref } from 'vue'

export const palette = {
  type: String,
  validator: function (value) {
    return [
      'basic',
      'primary',
      'secondary',
      'tertiary',
      'success',
      'info',
      'warning',
      'error',
      'disabled'
    ].indexOf(value) !== -1
  }
}

export const useColor = function (color, palette = ref(undefined)) {
  const classColor = computed(() => {
    return {
      [`palette:${palette.value}`]: palette.value,
      [`${palette.value || 'primary'}:${color.value}`]: color.value
    }
  })

  return {
    classColor
  }
}
