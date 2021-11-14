import { computed, onMounted, ref, toRefs, watch } from 'vue'

export const usePrefix = function (props) {
  const {
    // Values
    prefix,
    suffix
  } = toRefs(props)

  const prefixItem = ref(undefined)
  const suffixItem = ref(undefined)

  const prefixWidth = ref(0)
  const suffixWidth = ref(0)

  const updatePrefix = () => requestAnimationFrame(() => {
    prefixWidth.value = prefix.value ? (prefixItem.value?.offsetWidth || 0) : 0
    suffixWidth.value = suffix.value ? (suffixItem.value?.offsetWidth || 0) : 0
  })

  const styleList = computed(() => {
    return {
      '--_cf__pr-width': prefixWidth.value + 'px',
      '--_cf__sf-width': suffixWidth.value + 'px'
    }
  })

  watch([prefix, suffix], updatePrefix)
  onMounted(updatePrefix)

  return {
    prefixItem,
    suffixItem,
    styleList
  }
}
