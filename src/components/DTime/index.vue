<template>
  <d-window
    :auto-close="false"
    :disabled="disabled || readonly"
    size="minimum"
    width="auto"
  >
    <template v-slot:control="{ classList, onClick, open }">
      <d-carcass-field
        v-bind="bindCarcassField"
        :focus="open"
        :turn="open"
        @on-cancel="onCancel"
      >
        <template v-slot:default="{ className, classNameHidden }">
          <input
            ref="input"
            v-bind="inputAttrs"
            v-model="propValue"
            :class="classNameHidden"
            :name="name"
            :required="required"
            type="text"
          >
          <span :class="`${classList} ${className}`" @click="onClick" v-text="output"/>
        </template>
      </d-carcass-field>
    </template>

    <template v-slot:window>
      <d-time-picker v-bind="bindPicker" @on-input="onSelect"/>
    </template>
  </d-window>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import DTimePicker from '@/components/DTimePicker'
import DWindow from '@/components/DWindow'
import { props } from './props'
import { computed, ref } from 'vue'
import GeoDate from '@/classes/GeoDate'
import attrTimePicker from '@/components/DTimePicker/attrTimePicker'
import useAdmin from '@/uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'

export default {
  name: 'DTime',
  inheritAttrs: false,
  components: {
    DCarcassField,
    DTimePicker,
    DWindow
  },
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const input = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      checkValidity,
      setChange,
      onSelect,
      onCancel
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const geo = computed(() => new GeoDate(props.locales, propValue.value).setType('time'))
    const output = computed(() => propValue.value ? geo.value.toString(undefined, 'auto') : undefined)

    const bindPicker = attrTimePicker({ props })
    const bindCarcassField = useCarcass(
      props,
      context,
      propValidationMessage,
      propValue
    )

    useAdmin('d-time', context)

    return {
      input,
      propValue,
      propValidationMessage,
      output,
      bindPicker,
      bindCarcassField,
      checkValidity,
      setChange,
      onSelect,
      onCancel
    }
  }
}
</script>

<style lang="scss"></style>
