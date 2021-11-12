import { computed, ref, toRefs, watch } from 'vue'

export const useGroup = function (props, context) {
  const {
    // Values
    iconArrowDown,
    group,

    // Options
    groupShow
  } = toRefs(props)

  const valueGroup = ref(group.value || {})
  const isGroupOpen = (value) => groupShow.value || valueGroup.value?.[value]

  const iconGroup = computed(() => groupShow.value ? undefined : iconArrowDown.value)
  const onGroup = ({ value }) => {
    if (!groupShow.value) {
      valueGroup.value = {
        ...valueGroup.value,
        [value]: !valueGroup.value?.[value]
      }

      context.emit('on-group', {
        value,
        group: valueGroup.value
      })
    }
  }

  watch(group, (value) => {
    valueGroup.value = value
  })

  return {
    iconGroup,
    isGroupOpen,
    onGroup
  }
}
