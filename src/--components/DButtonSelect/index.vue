<template>
  <d-menu
    ref="menu"
    v-bind="bindMenu"
    @on-input="onSelect"
  >
    <template v-slot:default="{ classList, onClick, open, value, names, progress }">
      <input
        ref="input"
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
import { ref, toRefs } from 'vue'
import { setupButton } from '@/--components/DButton/setupButton'
import { setupInput } from '@/--components/DInput/setupInput'
import { setupMenu } from '@/--components/DMenu/setupMenu'
import { useAdmin } from '@/--uses/useAdmin'

export default {
  name: 'DButtonSelect',
  components: {
    DButton,
    DMenu
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const refs = toRefs(props)
    const {
      item,
      value,
      name,
      iconArrowDown
    } = refs

    const input = ref(undefined)
    const menu = ref(undefined)

    const {
      propValue,
      propValidationMessage,
      checkValidity,
      onSelect
    } = setupInput(
      input,
      menu,
      item,
      value,
      name,
      ref(undefined),
      context
    )

    const { bindButton } = setupButton({
      ...refs,
      iconTrailing: iconArrowDown
    })
    const { bindMenu } = setupMenu(refs)

    useAdmin('d-button-select')

    return {
      input,
      menu,
      propValue,
      propValidationMessage,
      bindButton,
      bindMenu,
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
