import { computed } from 'vue'

export default function attrProgress (props) {
  const isProgress = computed(() => props.progress && !props?.disabled && !props?.readonly)
  const bindProgress = computed(() => typeof props.progress === 'object'
    ? props.progress
    : { visible: props.progress })

  return {
    isProgress,
    bindProgress
  }
}
