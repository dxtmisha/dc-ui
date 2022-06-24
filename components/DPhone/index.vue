<template>
  <d-carcass-field
    v-bind="bindCarcassField"
    @on-cancel="onCancel"
  >
    <template v-slot:left>
      <d-button-select :list="listMask" :menu-window-in-dom="true" tag="span"/>
    </template>
    <template v-slot:default="{ className }">
      <d-mask
        ref="input"
        :class="className"
        :inputAttrs="bindInput"
        :mask="mask"
        :on="on"
        :visible="false"
        :view-placeholder="false"
        type-input="tel"
        v-bind="bindMask"
        @on-input="onInputMask"
        @on-change="onChange"
      />
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '../DCarcassField'
import DMask from '../DMask'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '../../uses/useField'
import useInput from './useInput'
import useMask from './useMask'
import DButtonSelect from '../DButtonSelect'

export default {
  name: 'DPhone',
  components: {
    DButtonSelect,
    DCarcassField,
    DMask
  },
  props,
  emits: [
    'on-input',
    'on-change',
    'update:value',
    'update:modelValue'
  ],
  setup (props, context) {
    const input = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      propCounter,
      checkValidity,
      setChange,
      onEmit,
      onInput,
      onChange,
      onCancel
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const {
      bindMask,
      listMask,
      mask,
      onInputMask
    } = useMask(props, onInput)

    const bindInput = useInput(props)
    const bindCarcassField = useCarcass(
      props,
      propValidationMessage,
      propValue,
      propCounter
    )

    useAdmin('d-input', context, input)

    return {
      input,

      propValidationMessage,
      propValue,
      bindInput,
      bindCarcassField,

      checkValidity,
      setChange,

      onEmit,
      onInput,
      onChange,
      onCancel,

      bindMask,
      listMask,
      mask,
      onInputMask
    }
  }
}
</script>

<style lang="scss"/>
