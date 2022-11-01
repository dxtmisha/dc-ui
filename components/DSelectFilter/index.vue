<template>
  <div class="d-select-filter">
    <input
      ref="input"
      v-model="propValue"
      :name="name"
      :required="required"
      class="d-select-filter__input"
      type="text"
      v-bind="inputAttrs"
    >
    <div v-if="text" class="d-select-filter__text" v-html="text"/>
    <div class="d-select-filter__list">
      <d-button
        v-for="item in propList"
        :key="item.value"
        align="left"
        class="d-select-filter__button"
        lowercase
        tag="span"
        v-bind="item"
        @on-click="onInput"
      />
    </div>
    <d-carcass-message
      :counter="counter"
      :counter-value="propCounter"
      :disabled="disabled"
      :helper-message="helperMessage"
      :maxlength="maxlength"
      :validation-message="propValidationMessage"
    />
  </div>
</template>

<script>
import DButton from '../DButton'
import DCarcassMessage from '../DCarcassMessage'
import { props } from './props'
import { ref } from 'vue'
import setValues from '../../functions/setValues'
import useAdmin from '../../uses/useAdmin'
import useField from '../../uses/useField'
import useItems from './useItems'

export default {
  name: 'DSelectFilter',
  inheritAttrs: false,
  components: {
    DButton,
    DCarcassMessage
  },
  props,
  emits: [
    'on-input',
    'update:value',
    'update:modelValue'
  ],
  setup (props, context) {
    const input = ref(undefined)
    const menu = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      propCounter,
      checkValidity,
      setChange,
      onSelect
    } = useField(
      input,
      menu,
      props,
      context
    )

    const set = value => onSelect({
      value: setValues(
        propValue.value,
        value,
        !!props.multiple,
        props.maxlength,
        props.isNone
      )
    })

    const {
      /**
       * @type {Ref<Object.<string, *>>}
       */
      propList,
      propValueItem
    } = useItems(props, propValue, set)

    useAdmin('d-select-filter', context, input)

    return {
      input,

      propList,
      propValidationMessage,
      propValue,
      propValueItem,
      propCounter,

      checkValidity,
      setChange,

      onInput: ({ value }) => set(value)
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-select-filter {
  @include selectFilterInit;
}
</style>
