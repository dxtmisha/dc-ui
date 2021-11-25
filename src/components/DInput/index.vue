<template>
  <d-carcass-field
    ref="field"
    v-bind="bindCarcassField"
    @on-previous="onPrevious"
    @on-next="onNext"
    @on-cancel="onCancel"
  >
    <template v-slot:default="{ className }">
      <d-mask
        v-if="isMask"
        ref="input"
        :class="className"
        :mask="mask"
        :value="value"
        :type="type"
        :locales="locales"
        :visibleMask="visibleMask"
        :on="on"
        :attrsInput="bindInput"
        @on-input="onInput"
        @on-change="onChange"
      />
      <input
        v-else
        ref="input"
        :class="className"
        v-bind="bindInput"
        v-model="propValue"
        v-on="on"
        @input="onInput"
        @change="onChange"
      >
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import DMask from '@/components/DMask'
import { props } from '@/components/DInput/props'
import { ref, toRefs } from 'vue'
import { setupCarcassField } from '@/components/DCarcassField/setupCarcassField'
import { setupInput } from '@/components/DInput/setupInput'
import { useAdmin } from '@/uses/useAdmin'
import { useArrow } from '@/components/DInput/useArrow'
import { useInput } from '@/components/DInput/useInput'
import { useWatch } from '@/uses/useWatch'

export default {
  name: 'DInput',
  components: {
    DCarcassField,
    DMask
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const {
      icon,
      iconActive,
      iconTrailing,
      item,
      value,
      name,
      text,
      prefix,
      suffix,
      helperMessage,
      validationMessage,
      required,
      selected,
      readonly,
      disabled,
      type,
      autocomplete,
      autofocus,
      inputmode,
      min,
      max,
      minlength,
      maxlength,
      pattern,
      placeholder,
      spellcheck,
      step,
      attrsInput,
      mask,
      visibleMask,
      arrow,
      appearance,
      size,
      shape,
      align,
      adaptive,
      counter,
      cancel,
      ripple
    } = toRefs(props)

    const field = ref(undefined)
    const input = ref(undefined)

    const {
      propValue,
      propCounter,
      propValidationMessage,
      change,
      emit,
      checkValidity,
      onInput,
      onChange,
      onCancel
    } = setupInput(
      field,
      input,
      item,
      value,
      name,
      validationMessage,
      context
    )

    const isMask = useWatch([type, mask], data => {
      data.value = !arrow.value &&
        (
          [
            'date',
            'datetime',
            'month',
            'time'
          ].indexOf(type.value) !== -1 ||
          (type.value === 'text' && mask.value)
        )
    })
    const active = useWatch([
      propValue,
      placeholder,
      visibleMask
    ], data => {
      data.value = !!propValue.value || !!placeholder.value || (isMask.value && visibleMask.value)
    })
    const filled = useWatch(propValue, data => {
      data.value = !!propValue.value
    })

    const {
      isPrevious,
      isNext,
      onPrevious,
      onNext
    } = useArrow(
      propValue,
      min,
      max,
      step,
      change,
      emit
    )

    const { bindInput } = useInput(
      name,
      required,
      readonly,
      disabled,
      type,
      autocomplete,
      autofocus,
      inputmode,
      min,
      max,
      minlength,
      maxlength,
      pattern,
      placeholder,
      spellcheck,
      step,
      attrsInput
    )

    const { bindCarcassField } = setupCarcassField(
      icon,
      iconActive,
      iconTrailing,
      text,
      prefix,
      suffix,
      helperMessage,
      propValidationMessage,
      propCounter,
      maxlength,
      required,
      undefined,
      active,
      selected,
      filled,
      undefined,
      readonly,
      disabled,
      isPrevious,
      isNext,
      undefined,
      arrow,
      appearance,
      size,
      shape,
      align,
      adaptive,
      counter,
      cancel,
      ripple
    )

    useAdmin('d-input')

    return {
      field,
      input,
      propValue,
      propValidationMessage,
      isMask,
      bindInput,
      bindCarcassField,
      checkValidity,
      onInput,
      onChange,
      onPrevious,
      onNext,
      onCancel
    }
  }
}
</script>

<style lang="scss"></style>
