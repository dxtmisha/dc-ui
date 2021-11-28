<template>
  <textarea
    ref="input"
    v-bind="$attrs"
    class="d-textarea-autosize"
    :value="value"
    :name="name"
    :on="on"
    @focus="reSize"
    @input="onInput"
    @change="onChange"
  />
  <div v-once
       ref="clone"
       class="d-textarea-autosize__clone"/>
</template>

<script>
import { props } from './props'
import { onUpdated, ref, toRefs } from 'vue'
import { setupInput } from '@/--components/DInput/setupInput'
import { useAdmin } from '@/--uses/useAdmin'
import { useResize } from '@/--components/DTextareaAutosize/useResize'

export default {
  name: 'DTextareaAutosize',
  inheritAttrs: false,
  props,
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
      propValidationMessage,
      checkValidity,
      cancel,
      onInput,
      onChange
    } = setupInput(
      input,
      undefined,
      undefined,
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
      propValidationMessage,
      checkValidity,
      reSize,
      cancel,
      onInput,
      onChange
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
