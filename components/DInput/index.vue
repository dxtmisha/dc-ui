<template>
<d-carcass-field
  v-bind="bindCarcassField"
  :class="{'is-visibility':pVisibility}"
  :active-trailing="pVisibility"
  :icon-trailing="pIconTrailing"
  :icon-trailing-active="pIconTrailingActive"
  @on-previous="onArrow('previous')"
  @on-next="onArrow('next')"
  @on-cancel="onCancel"
  @on-trailing="onTrailing"
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
      :type="pType"
      :class="className"
      :pattern="bindPattern"
      v-model="propValue"
      v-on="on"
      @input="onEmit"
      @change="onChange"
      @keypress="onKeypress"
      @paste="onPaste"
    >
  </template>
</d-carcass-field>
</template>

<script>
import DCarcassField from '../DCarcassField'
import DMask from '../DMask'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '../../uses/useField'
import useInput from './useInput'
import useMask from './useMask'
import useInputNumber from './useInputNumber'

export default {
  name: 'DInput',
  components: {
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

    const {
      onKeypress,
      onPaste
    } = useInputNumber(props, propValue, onEmit)

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

    const pVisibility = ref(false)
    const pType = computed(() => pVisibility.value ? 'text' : props.type)
    const pIconTrailing = computed(() => props.type === 'password' ? 'visibility' : props.iconTrailing)
    const pIconTrailingActive = computed(() => props.type === 'password' ? 'visibility_off' : undefined)
    const onTrailing = () => {
      pVisibility.value = !pVisibility.value
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
      bindPattern: computed(() => {
        if (props.pattern) {
          return props.pattern
        } else if (props.type === 'email') {
          return '[\\S]+@[\\S]{2,}\\.[\\w]{2,}'
        } else {
          return undefined
        }
      }),

      checkValidity,
      setChange,

      onEmit,
      onInput,
      onChange,
      onArrow,
      onCancel,
      onKeypress,
      onPaste,

      pVisibility,
      pType,
      pIconTrailing,
      pIconTrailingActive,
      onTrailing
    }
  }
}
</script>

<style lang="scss"/>
