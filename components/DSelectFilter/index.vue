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
    <div class="d-select-filter__text" v-html="text"/>
    <div class="d-select-filter__list">
      <d-button
        v-for="item in propList"
        :key="item.value"
        align="left"
        v-bind="item"
        @on-click="onInput"
      />
    </div>
    <div v-if="ifMessage" class="d-select-filter__message">
      <div class="d-select-filter__info">
        <div v-if="propValidationMessage" class="d-select-filter__validation">{{ propValidationMessage }}</div>
        <div v-else-if="helperMessage" class="d-select-filter__helper">{{ helperMessage }}</div>
      </div>
      <div v-if="counter" class="d-select-filter__counter">{{ counterMessage }}</div>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import { props } from './props'
import { computed, ref } from 'vue'
import setValues from '../../functions/setValues'
import useAdmin from '../../uses/useAdmin'
import useField from '../../uses/useField'
import useItems from './useItems'

export default {
  name: 'DSelectFilter',
  inheritAttrs: false,
  components: { DButton },
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
        props.maxlength
      )
    })

    /**
     * @type {Ref<Object.<string, *>>}
     */
    const propList = useItems(props, propValue)

    const ifMessage = computed(() => (props.helperMessage || propValidationMessage.value || props.counter) && !props.disabled)
    const counterMessage = computed(() => (propCounter.value || '0') + (props.maxlength ? ` / ${props.maxlength}` : ''))

    useAdmin('d-select-filter', context, input)

    return {
      input,

      propList,
      propValidationMessage,
      propValue,

      ifMessage,
      counterMessage,

      checkValidity,
      setChange,

      onInput: ({ value }) => set(value)
    }
  }
}
</script>

<style lang="scss"></style>
