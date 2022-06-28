<template>
  <d-carcass-field
    class="d-phone"
    v-bind="bindCarcassField"
    @on-cancel="onCancel"
  >
    <template v-slot:left>
      <d-button-select
        :icon="flag"
        :list="listMask"
        :menu-attrs="{ class: 'd-phone__menu' }"
        :menu-window-in-dom="true"
        :menu-window-light="true"
        :minimum="true"
        :value="code"
        adaptive="icon"
        appearance="text"
        class="d-phone__button"
        menu-size="dynamic"
        tag="span"
        @on-input="onInputCountry"
      />
    </template>
    <template v-slot:default="{ className }">
      <d-mask
        ref="input"
        :class="className"
        :inputAttrs="bindInput"
        :mask="mask"
        :value-paste="true"
        :view-placeholder="false"
        :visible="false"
        type-input="tel"
        v-bind="bindMask"
        @on-focus="onClick"
        @on-blur="onBlur"
        @on-input="onInputMask"
        @on-change="onChange"
      />
    </template>
  </d-carcass-field>
</template>

<script>
import DButtonSelect from '../DButtonSelect'
import DCarcassField from '../DCarcassField'
import DMask from '../DMask'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '../../uses/useField'
import useInput from './useInput'
import useMask from './useMask'

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
      code,
      flag,
      propPlaceholder,
      onInputCountry,
      onInputMask,
      onClick,
      onBlur
    } = useMask(
      props,
      input,
      propValue,
      onInput,
      onCancel
    )

    const bindInput = useInput(props, propPlaceholder)
    const bindCarcassField = useCarcass(
      props,
      propValidationMessage,
      propValue,
      propCounter,
      propPlaceholder
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
      code,
      flag,
      onInputCountry,
      onInputMask,
      onClick,
      onBlur
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-phone {
  @include phoneInit;
}
</style>
