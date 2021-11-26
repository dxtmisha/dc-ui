<template>
  <textarea
    ref="input"
    v-bind="$attrs"
    class="d-textarea-autosize"
    :value="value"
    :name="name"
    @focus="reSize"
    @input="onInput"
  />
  <div v-once
       ref="clone"
       class="d-textarea-autosize__clone"/>
</template>

<script>
import { onUpdated, ref, toRefs } from 'vue'
import { setupInput } from '@/components/DInput/setupInput'
import { useAdmin } from '@/uses/useAdmin'
import { useResize } from '@/components/DTextareaAutosize/useResize'

export default {
  name: 'DTextareaAutosize',
  inheritAttrs: false,
  props: {
    value: String,
    name: String
  },
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const {
      value,
      name
    } = toRefs(props)

    const input = ref(undefined)
    const clone = ref(undefined)

    const {
      propValue,
      checkValidity,
      cancel,
      onInput
    } = setupInput(
      input,
      ref(undefined),
      value,
      name,
      ref(undefined),
      context
    )

    const { reSize } = useResize(
      input,
      clone,
      value,
      propValue
    )

    onUpdated(() => {
      input.value.value = propValue.value
    })

    useAdmin('d-textarea-autosize')

    return {
      input,
      clone,
      checkValidity,
      reSize,
      cancel,
      onInput
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-textarea-autosize {
  @include textareaAutosizeInit;
}
</style>
