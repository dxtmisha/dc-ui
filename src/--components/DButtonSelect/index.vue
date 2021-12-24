<template>
  <d-menu
    ref="menu"
    v-bind="bindMenu"
    @on-input="onSelect"
  >
    <template v-slot:default="{ classList, onClick, open, value, names, progress }">
      <input
        ref="input"
        v-bind="attrsSelect"
        :name="name"
        type="hidden"
        v-model="propValue"
      >
      <d-button
        v-bind="bindButton"
        class="d-button-select__button"
        :class="classList"
        :value="value"
        :text="undefined"
        :turn="open"
        :progress="progress"
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
import DButton from '@/components/DButton'
import DMenu from '@/components/DMenu'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useButton from './useButton'
import useField from '@/uses/useField'
import useMenu from '@/--components/DSelect/useMenu'
import useSelect from '@/--components/DSelect/useSelect'

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

    const { propList } = useSelect(props)

    const bindMenu = useMenu(props, propList)
    const { bindButton } = useButton(props, context)

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
