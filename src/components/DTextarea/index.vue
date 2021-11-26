<template>
  <d-carcass-field v-bind="bindCarcassField">
    <template v-slot:default="{ className }">
      <d-textarea-autosize
        ref="input"
        :class="className"
        v-bind="bindInput"
        :value="value"
        v-on="on"
        @on-input="onInput"
        @on-change="onChange"
      />
    </template>
  </d-carcass-field>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import DTextareaAutosize from '@/components/DTextareaAutosize'
import { props } from '@/components/DInput/props'
import { ref, toRefs } from 'vue'
import { setupCarcassField } from '@/components/DCarcassField/setupCarcassField'
import { setupInput } from '@/components/DInput/setupInput'
import { useAdmin } from '@/uses/useAdmin'
import { useInput } from '@/components/DInput/useInput'
import { useWatch } from '@/uses/useWatch'

export default {
  name: 'DTextarea',
  components: {
    DTextareaAutosize,
    DCarcassField
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
      placeholder,
      attrsInput
    } = refs

    const input = ref(undefined)

    const {
      propValue,
      propCounter,
      propValidationMessage,
      checkValidity,
      onInput,
      onChange
    } = setupInput(
      input,
      item,
      value,
      name,
      validationMessage,
      context
    )

    const active = useWatch([propValue, placeholder], data => {
      data.value = !!propValue.value || !!placeholder.value
    })
    const filled = useWatch(propValue, data => {
      data.value = !!propValue.value
    })

    const { bindInput } = useInput(refs, attrsInput)
    const { bindCarcassField } = setupCarcassField({
      ...refs,
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active,
      selected,
      filled,
      cancel: false,
      ripple: false
    })

    useAdmin('d-textarea')

    return {
      input,
      propValue,
      propValidationMessage,
      bindInput,
      bindCarcassField,
      checkValidity,
      onInput,
      onChange
    }
  }
}
</script>

<style lang="scss"></style>
