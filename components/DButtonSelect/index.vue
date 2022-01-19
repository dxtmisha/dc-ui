<template>
  <d-menu
    ref="menu"
    v-bind="bindMenu"
    @on-input="onSelect"
  >
    <template v-slot:default="{ classList, onClick, open, names, progress }">
      <input
        ref="input"
        v-bind="inputAttrs"
        v-model="propValue"
        :name="name"
        type="hidden"
      >
      <d-button
        v-bind="bindButton"
        :class="classList"
        :progress="progress"
        :turn="open"
        class="d-button-select__button"
        @click="onClick"
      >
        <span class="d-button-select__body">
          <span v-if="text" class="d-button-select__text">{{ text }}</span>
          <span v-if="names && names.length > 0" class="d-button-select__value">{{ names.join(', ') }}</span>
        </span>
      </d-button>
    </template>
  </d-menu>
</template>

<script>
import DButton from '../DButton'
import DMenu from '../DMenu'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useButton from './useButton'
import useField from '../../uses/useField'
import useMenu from '../DSelect/useMenu'

export default {
  name: 'DButtonSelect',
  inheritAttrs: false,
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const input = ref(undefined)
    const menu = ref(undefined)

    const {
      propValidationMessage,
      propValue,
      checkValidity,
      onSelect
    } = useField(
      input,
      menu,
      props,
      context
    )

    const bindMenu = useMenu(props, propValue)
    const bindButton = useButton(props, context, propValue)

    useAdmin('d-button-select', context)

    return {
      input,
      menu,

      propValidationMessage,
      propValue,

      bindMenu,
      bindButton,

      checkValidity,

      onSelect
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-button-select {
  @include buttonSelectInit;
}
</style>
