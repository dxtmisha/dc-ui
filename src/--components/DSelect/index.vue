<template>
  <d-menu
    ref="menu"
    v-bind="bindMenu"
    @on-input="onSelect"
  >
    <template v-slot:default="{ classList, onClick, open, items, progress }">
      <d-carcass-field
        v-bind="bindCarcassField"
        :focus="open"
        :turn="open"
        :progress="progress"
        @on-previous="onPrevious"
        @on-next="onNext"
        @on-cancel="onCancel"
      >
        <template v-slot:default="{ className, classNameHidden }">
          <input
            ref="input"
            v-bind="attrsSelect"
            :class="classNameHidden"
            :name="name"
            :required="required"
            type="text"
            v-model="propValue"
          >
          <d-select-value
            :class="`${classList} ${className}`"
            :value="items"
            :multiple="multiple"
            :disabled="disabled"
            :palette="palette"
            @on-trailing="onCancelValue"
            @click="onClick"
          />
        </template>
      </d-carcass-field>
    </template>
  </d-menu>
</template>

<script>
import DCarcassField from '@/--components/DCarcassField'
import DMenu from '@/--components/DMenu'
import DSelectValue from '@/--components/DSelectValue'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useArrow from './useArrow'
import useCarcass from './useCarcass'
import useField from '@/uses/useField'
import useMenu from './useMenu'
import useSelect from './useSelect'

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

    const propCancel = computed(() => !props.multiple && props.cancel)
    const filled = computed(() => !!propValue.value)

    const { propList } = useSelect(props)

    const {
      onPrevious,
      onNext
    } = useArrow(menu)

    const { bindMenu } = useMenu(props, propList)
    const { bindCarcassField } = useCarcass(
      props,
      context,
      propValidationMessage,
      propCounter,
      propCancel,
      filled
    )

    useAdmin('d-select', context, input)

    return {
      input,
      menu,
      propValidationMessage,
      propValue,
      bindMenu,
      bindCarcassField,
      checkValidity,
      setChange,
      onSelect,
      onPrevious,
      onNext,
      onCancel,
      onCancelValue
    }
  }
}
</script>

<style lang="scss"></style>
