import { computed } from 'vue'

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

export default function useColor (props) {
  return computed(() => {
    return {
      [`palette:${props.palette}`]: props.palette,
      [`${props.palette || 'primary'}:${props.color}`]: props.color
    }
  })
}
