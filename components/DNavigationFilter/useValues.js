import { computed, ref, watch } from 'vue'

export default function useValues (props, context, form) {
  const nameCache = computed(() => `__dcUi-filter--${props.save}`)
  const values = ref(props.save ? JSON.parse(localStorage.getItem(nameCache.value) || '{}') : undefined)
  const valuesByItem = computed(() => form.value?.valuesByItem)

  const set = (event = undefined) => {
    const newValues = event?.values

    if (props.save) {
      localStorage.setItem(nameCache.value, JSON.stringify(newValues))
    }

    values.value = newValues

    context.emit('on-input', {
      value: newValues,
      valuesByItem: valuesByItem.value
    })
  }
  const clear = () => set(undefined)

  watch(nameCache, name => {
    values.value = localStorage.getItem(name)
  })

  return {
    values,
    valuesByItem,
    set,
    clear
  }
}
