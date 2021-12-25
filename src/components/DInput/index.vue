<template>
  <d-carcass-field
    v-bind="bindCarcassField"
    @on-previous="onArrow('previous')"
    @on-next="onArrow('next')"
    @on-cancel="onCancel"
  >
    <template v-slot:default="{ className }">
      <d-mask
        v-if="isMask"
        ref="input"
        v-bind="bindMask"
        :class="className"
        :on="on"
        :inputAttrs="bindInput"
        @on-input="onInput"
        @on-change="onChange"
      />
      <input
        v-else
        ref="input"
        v-bind="bindInput"
        :class="className"
        v-model="propValue"
        v-on="on"
        @input="onEmit"
        @change="onChange"
      >
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import DMask from '@/components/DMask'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'
import useInput from './useInput'
import useMask from './useMask'

export default {
  name: 'DInput',
  components: {
    DCarcassField,
    DMask
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
      onEmit,
      onInput,
      onSelect,
      onChange,
      onCancel
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const {
      isMask,
      bindMask
    } = useMask(props)

    const bindInput = useInput(props)
    const bindCarcassField = useCarcass(
      props,
      isMask,
      propValidationMessage,
      propValue,
      propCounter
    )

    const onArrow = type => {
      onSelect({
        value: type === 'previous'
          ? parseFloat(propValue.value || props.max || '0') - (props.step || 1) || ''
          : parseFloat(propValue.value || props.min || '0') + (props.step || 1) || ''
      })
    }

    useAdmin('d-input', context, input)

    return {
      input,

      isMask,

      propValidationMessage,
      propValue,
      bindMask,
      bindInput,
      bindCarcassField,

      checkValidity,
      setChange,

      onEmit,
      onInput,
      onChange,
      onArrow,
      onCancel
    }
  }
}
</script>

<style lang="scss"></style>
