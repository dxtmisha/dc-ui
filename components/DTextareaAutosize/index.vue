<template>
  <textarea
    ref="input"
    v-model="propValue"
    :name="name"
    :required="required"
    class="d-textarea-autosize"
    v-bind="$attrs"
    @change="onChange"
    @focus="reSize"
    @input="onEmit"
    v-on="on"
  />
  <div v-once
       ref="clone"
       class="d-textarea-autosize__clone"/>
</template>

<script>
import { props } from './props'
import { onUpdated, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useField from '../../uses/useField'
import useResize from './useResize'

export default {
  name: 'DTextareaAutosize',
  inheritAttrs: false,
  props,
  emits: [
    'on-input',
    'on-change',
    'update:value',
    'update:modelValue'
  ],
  setup (props, context) {
    const input = ref(undefined)
    const clone = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      checkValidity,
      cancel,
      setChange,
      onEmit,
      onChange
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const { reSize } = useResize(
      input,
      clone,
      propValue,
      props
    )

    onUpdated(() => {
      input.value.value = propValue.value
    })

    useAdmin('d-textarea-autosize', context)

    return {
      input,
      clone,
      propValidationMessage,
      propValue,
      checkValidity,
      cancel,
      reSize,
      setChange,
      onEmit,
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
