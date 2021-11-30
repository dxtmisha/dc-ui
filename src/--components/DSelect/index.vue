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
import DMenu from '@/components/DMenu'
import DSelectValue from '@/--components/DSelectValue'
import { props } from './props'
import { ref, toRefs } from 'vue'
import { setupCarcassField } from '@/--components/DCarcassField/setupCarcassField'
import { setupInput } from '@/--components/DInput/setupInput'
import { setupMenu } from '@/--components/DMenu/setupMenu'
import { useAdmin } from '@/--uses/useAdmin'
import { useArrow } from './useArrow'
import { useSelect } from '@/--components/DSelect/useSelect'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DSelect',
  components: {
    DMenu,
    DSelectValue,
    DCarcassField
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const refs = toRefs(props)
    const {
      item,
      value,
      name,
      validationMessage,
      selected,
      type,
      list,
      locales,
      multiple,
      cancel,
      iconArrowDown
    } = refs

    const input = ref(undefined)
    const menu = ref(undefined)

    const {
      propValue,
      propCounter,
      propValidationMessage,
      checkValidity,
      onSelect,
      onCancel,
      onCancelValue
    } = setupInput(
      input,
      menu,
      item,
      value,
      name,
      validationMessage,
      context
    )

    const { propList } = useSelect(
      type,
      list,
      locales
    )
    const propCancel = useWatch([multiple, cancel], data => {
      data.value = !multiple.value && cancel.value
    })
    const filled = useWatch(propValue, data => {
      data.value = !!propValue.value
    })

    const {
      onPrevious,
      onNext
    } = useArrow(menu)

    const { bindMenu } = setupMenu({
      ...refs,
      list: propList
    })
    const { bindCarcassField } = setupCarcassField({
      ...refs,
      iconTrailing: iconArrowDown,
      validationMessage: propValidationMessage,
      counterValue: propCounter,
      active: filled,
      selected,
      filled,
      cancel: propCancel
    })

    useAdmin('d-select')

    return {
      input,
      menu,
      propValue,
      propValidationMessage,
      bindCarcassField,
      bindMenu,
      checkValidity,
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
