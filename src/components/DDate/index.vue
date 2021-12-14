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
      <d-date-picker
        v-bind="bindPicker"
        class="d-date"
        @on-input="onSelect"
      />
    </template>
  </d-window>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import DDatePicker from '@/components/DDatePicker'
import DWindow from '@/components/DWindow'
import { props } from '@/components/DDate/props'
import { computed, ref } from 'vue'
import GeoDate from '@/classes/GeoDate'
import useAdmin from '@/uses/useAdmin'
import useCarcass from '@/components/DTime/useCarcass'
import useField from '@/uses/useField'
import usePicker from './usePicker'

export default {
  name: 'DDate',
  inheritAttrs: false,
  components: {
    DCarcassField,
    DDatePicker,
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

    const getGeo = value => new GeoDate(props.locales, value).setType('date').toString(undefined, 'auto')

    const filled = computed(() => !!propValue.value)
    const output = computed(() => {
      if (propValue.value) {
        if (Array.isArray(propValue.value)) {
          return propValue.value.reduce(
            (previous, current) => previous + (previous !== '' ? ' - ' : '') + getGeo(current), ''
          )
        } else {
          return getGeo(propValue.value)
        }
      } else {
        return undefined
      }
    })

    const { bindPicker } = usePicker(props)
    const { bindCarcassField } = useCarcass(
      props,
      context,
      propValidationMessage,
      filled
    )

    useAdmin('d-date', context)

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

<style lang="scss">
@import "style";

.d-date {
  @include dateInit;
}
</style>
