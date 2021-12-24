<template>
  <d-carcass-field v-bind="bindCarcassField">
    <template v-slot:default="{ className }">
      <d-textarea-autosize
        ref="input"
        :class="className"
        v-bind="bindTextarea"
        :value="value"
        v-on="on"
        @on-input="onInput"
        @on-change="onChange"
      />
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '@/--components/DCarcassField'
import DTextareaAutosize from '@/--components/DTextareaAutosize'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'
import useTextarea from './useTextarea'

export default {
  name: 'DTextarea',
  components: {
    DTextareaAutosize,
    DCarcassField
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const input = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      propCounter,
      checkValidity,
      setChange,
      onInput,
      onChange
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const bindTextarea = useTextarea(props)
    const bindCarcassField = useCarcass(
      props,
      propValidationMessage,
      propValue,
      propCounter
    )

    useAdmin('d-textarea', context, input)

    return {
      input,
      propValue,
      propValidationMessage,
      bindTextarea,
      bindCarcassField,
      checkValidity,
      setChange,
      onInput,
      onChange
    }
  }
}
</script>

<style lang="scss"></style>
