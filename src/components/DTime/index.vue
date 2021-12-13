<template>
  <d-window
    :disabled="disabled || readonly"
    width="auto"
    size="minimum"
    :auto-close="false"
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
            v-bind="attrsInput"
            :class="classNameHidden"
            :name="name"
            :required="required"
            type="text"
            v-model="propValue"
          >
          <span
            :class="`${classList} ${className}`"
            @click="onClick"
          >{{ output }}</span>
        </template>
      </d-carcass-field>
    </template>
    <template v-slot:window>
      <d-time-picker
        v-bind="bindPicker"
        @on-input="onSelect"
      />
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
import useAdmin from '@/uses/useAdmin'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'
import usePicker from './usePicker'

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
      onSelect,
      onCancel
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const geo = computed(() => new GeoDate(props.locales, propValue.value).setType('time'))
    const filled = computed(() => !!propValue.value)
    const output = computed(() => propValue.value ? geo.value.toString(undefined, 'auto') : undefined)

    const { bindPicker } = usePicker(props)
    const { bindCarcassField } = useCarcass(
      props,
      context,
      propValidationMessage,
      filled
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
      onSelect,
      onCancel
    }
  }
}
</script>

<style lang="scss"></style>
