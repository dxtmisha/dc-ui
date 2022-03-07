import { computed, ref, watch } from 'vue'

export default function useValues (props, context) {
  const nameCache = computed(() => `__dcUi-filter--${props.save}`)
  const values = ref(props.save ? localStorage.getItem(nameCache.value) : undefined)

  const set = (newValues = undefined) => {
    if (props.save) {
      localStorage.setItem(nameCache.value, newValues)
    }

    values.value = newValues
    context.emit('on-input', { newValues })
  }
  const clear = () => set(undefined)

  watch(nameCache, name => {
    values.value = localStorage.getItem(name)
  })

  return {
    values,
    set,
    clear
  }
}
