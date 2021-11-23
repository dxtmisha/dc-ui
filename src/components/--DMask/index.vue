<template>
  <label class="d-mask">
    <span class="d-mask__view">
      <input
        ref="input"
        class="d-mask__input"
        type="text"
        :pattern="propPattern"
        v-on="on"
        @keypress.prevent="onKeypress"
        @keydown="onKeydown"
        @paste.prevent="onPaste"
        @blur="onBlur"
      />
      <span
        ref="chars"
        class="d-mask__char"
      />
    </span>
  </label>
</template>

<script>
import { props } from '@/components/DMask/props'
import { ref, toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useCharacter } from '@/components/--DMask/--useCharacter'
import { useEvent } from '@/components/--DMask/useEvent'
import { useInit } from '@/components/--DMask/useInit'
import { useValidity } from '@/components/--DMask/useValidity'
import { useValue } from '@/components/--DMask/useValue'

export default {
  name: 'DMask',
  props,
  emits: ['on-change', 'on-input'],
  setup (props, context) {
    const {
      mask,
      value,
      view,
      match,
      pattern,
      type,
      locales
    } = toRefs(props)

    const input = ref(false)
    const chars = ref(false)

    const {
      propView,
      propMask,
      propPattern
    } = useInit(
      input,
      mask,
      view,
      pattern,
      type,
      locales
    )

    /*
        // delete
        const resetValue = () => resetCharacter(value.value)


        const {
          character,
          standard,
          ifSpecialChar,
          resetCharacter,
          setValue,
          pasteValue,
          popValue
        } = useCharacter(
          input,
          propMask,
          value,
          match
        )

        const {
          validationMessage,
          checkValidity
        } = useValidity(input)

        const {
          onKeypress,
          onKeydown,
          onPaste,
          onBlur
        } = useEvent(
          input,
          standard,
          validationMessage,
          setValue,
          pasteValue,
          popValue,
          checkValidity,
          inputValue,
          context
        )

        const { cancel } = useValue(
          value,
          resetValue,
          resetCharacter
        )
        */

    useAdmin('d-mask')

    return {
      input,
      chars
      /*,
      propPattern,
      validationMessage,
      cancel,
      checkValidity,
      onKeypress,
      onKeydown,
      onPaste,
      onBlur
      */
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-mask {
  @include maskInit;
}
</style>
