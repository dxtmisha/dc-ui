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
        @input="onEmit"
        @change="onChange"
      >
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '@/--components/DCarcassField'
import DMask from '@/components/DMask'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useArrow from './useArrow'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'
import useInput from './useInput'

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
      change,
      propValidationMessage,
      propValue,
      propCounter,
      checkValidity,
      setChange,
      emitFrame,
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

    const isMask = computed(() => !props.arrow &&
      (
        [
          'date',
          'datetime',
          'month',
          'time'
        ].indexOf(props.type) !== -1 ||
        ((props.type === 'text' || !props.type) && props.mask)
      ))
    const active = computed(() => !!propValue.value || !!props.placeholder || (isMask.value && props.visibleMask))
    const filled = computed(() => !!propValue.value)

    const {
      isPrevious,
      isNext,
      onPrevious,
      onNext
    } = useArrow(
      props,
      propValue,
      change,
      emitFrame
    )

    const { bindInput } = useInput(props)
    const { bindCarcassField } = useCarcass(
      props,
      propValidationMessage,
      propCounter,
      active,
      filled,
      isPrevious,
      isNext
    )

    useAdmin('d-input', context, input)

    return {
      input,
      propValue,
      propValidationMessage,
      isMask,
      bindInput,
      bindCarcassField,
      checkValidity,
      setChange,
      onEmit,
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
