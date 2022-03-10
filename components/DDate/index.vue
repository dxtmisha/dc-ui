<template>
  <d-window
    :auto-close="false"
    :disabled="disabled || readonly"
    :size="multiple ? 'fullscreen' : 'minimum'"
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
      <d-date-picker v-bind="bindPicker" class="d-date" @on-input="onSelect"/>
    </template>
  </d-window>
</template>

<script>
import DCarcassField from '../DCarcassField'
import DDatePicker from '../DDatePicker'
import DWindow from '../DWindow'
import { props } from './props'
import { computed, ref } from 'vue'
import GeoDate from '../../classes/GeoDate'
import attrDatePicker from '../DDatePicker/attrDatePicker'
import useAdmin from '../../uses/useAdmin'
import useCarcass from '../DTime/useCarcass'
import useField from '../../uses/useField'

export default {
  name: 'DDate',
  inheritAttrs: false,
  components: {
    DCarcassField,
    DDatePicker,
    DWindow
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

    const bindPicker = attrDatePicker({
      props,
      items: { value: propValue }
    })
    const bindCarcassField = useCarcass(
      props,
      context,
      propValidationMessage,
      propValue
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
