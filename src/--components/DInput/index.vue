<template>
  <d-carcass-field
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
import DCarcassField from '@/--components/DCarcassField'
import DMask from '@/components/DMask'
import { props } from '@/--components/DInput/props'
import { ref, toRefs } from 'vue'
import { setupCarcassField } from '@/--components/DCarcassField/setupCarcassField'
import { setupInput } from '@/--components/DInput/setupInput'
import { useAdmin } from '@/--uses/useAdmin'
import { useArrow } from '@/--components/DInput/useArrow'
import { useInput } from '@/--components/DInput/useInput'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DInput',
  components: {
    DCarcassField,
    DMask
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const refs = toRefs(props)
    const {
      item,
      value,
      name,
      validationMessage,
      selected,
      type,
      min,
      max,
      placeholder,
      step,
      attrsInput,
      mask,
      visibleMask,
      arrow
    } = refs

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
      input,
      undefined,
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
          ((type.value === 'text' || !type.value) && mask.value)
        )
    })
    const active = useWatch([
      propValue,
      placeholder,
      visibleMask,
      isMask
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

    const { bindInput } = useInput(refs, attrsInput)
    const { bindCarcassField } = setupCarcassField({
      ...refs,
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active,
      selected,
      filled,
      disabledPrevious: isPrevious,
      disabledNext: isNext
    })

    useAdmin('d-input')

    return {
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
