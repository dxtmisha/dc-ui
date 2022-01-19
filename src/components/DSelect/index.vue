<template>
  <d-menu ref="menu" v-bind="bindMenu" @on-input="onSelect">
    <template v-slot:default="{ classList, onClick, open, items, progress }">
      <d-carcass-field
        v-bind="bindCarcassField"
        :focus="open"
        :progress="progress"
        :turn="open"
        @on-previous="onArrow('previous')"
        @on-next="onArrow('next')"
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
          <d-select-value
            v-bind="bindSelectValue"
            :class="`${classList} ${className}`"
            :value="items"
            @click="onClick"
            @on-trailing="onCancelValue"
          />
        </template>
      </d-carcass-field>
    </template>
  </d-menu>
</template>

<script>
import DCarcassField from './../DCarcassField'
import DMenu from './../DMenu'
import DSelectValue from './../DSelectValue'
import { props } from './props'
import { ref } from 'vue'
import attrSelectValue from './../DSelectValue/attrSelectValue'
import useAdmin from './../../uses/useAdmin'
import useCarcass from './useCarcass'
import useField from './../../uses/useField'
import useMenu from './useMenu'

export default {
  name: 'DSelect',
  inheritAttrs: false,
  components: {
    DCarcassField,
    DMenu,
    DSelectValue
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const input = ref(undefined)
    const menu = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      propCounter,
      checkValidity,
      setChange,
      onSelect,
      onCancel,
      onCancelValue
    } = useField(
      input,
      menu,
      props,
      context
    )

    const bindMenu = useMenu(props, propValue)
    const bindSelectValue = attrSelectValue({ props })
    const bindCarcassField = useCarcass(
      props,
      context,
      propValidationMessage,
      propValue,
      propCounter
    )

    const onArrow = type => menu.value?.[type]()

    useAdmin('d-select', context, input)

    return {
      input,
      menu,

      propValidationMessage,
      propValue,

      bindMenu,
      bindSelectValue,
      bindCarcassField,

      checkValidity,
      setChange,

      onSelect,
      onArrow,
      onCancel,
      onCancelValue
    }
  }
}
</script>

<style lang="scss"></style>
