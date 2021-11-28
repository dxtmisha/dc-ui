<template>
  <label :class="classList">
    <span class="d-mask__view">
      <input
        ref="input"
        v-bind="attrsInput"
        class="d-mask__input"
        type="text"
        :pattern="propPattern"
        :on="on"
        @keypress.prevent="onKeypress"
        @keydown="onKeydown"
        @paste.prevent="onPaste"
        @blur="onBlur"
      />
      <span ref="chars" class="d-mask__chars"></span>
    </span>
  </label>
</template>

<script>
import { props } from '@/--components/DMask/props'
import { ref, toRefs } from 'vue'
import { useAdmin } from '@/--uses/useAdmin'
import { useCharacter } from '@/--components/DMask/useCharacter'
import { useEvent } from '@/--components/DMask/useEvent'
import { useMask } from '@/--components/DMask/useMask'
import { useValue } from '@/--components/DMask/useValue'
import { useView } from '@/--components/DMask/useView'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DMask',
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const {
      mask,
      value,
      viewSpecial,
      match,
      pattern,
      type,
      locales,
      visibleMask
    } = toRefs(props)

    const input = ref(undefined)
    const chars = ref(undefined)

    const {
      geo,
      propMask,
      propView,
      propPattern,
      setDate
    } = useMask(
      mask,
      pattern,
      type,
      locales
    )

    const {
      standard,
      setValue,
      pasteValue,
      popValue,
      cancel
    } = useCharacter(
      input,
      geo,
      propMask,
      value,
      match
    )

    const {
      validationCode,
      validationMessage,
      change,
      checkValidity
    } = useValue(
      input,
      geo,
      standard,
      propView,
      type,
      setDate,
      context
    )

    const {
      onKeypress,
      onKeydown,
      onPaste,
      onBlur
    } = useEvent(
      change,
      setValue,
      popValue,
      pasteValue
    )

    useView(
      input,
      chars,
      viewSpecial,
      standard,
      propView,
      validationCode
    )

    const isCharacter = useWatch(standard, data => {
      data.value = !!standard.value
    })
    const classList = useWatch([
      isCharacter,
      visibleMask
    ], data => {
      data.value = {
        'd-mask': true,
        'status-character': isCharacter.value || visibleMask.value
      }
    })

    useAdmin('d-mask')

    return {
      input,
      chars,
      propPattern,
      validationMessage,
      classList,
      checkValidity,
      cancel,
      onKeypress,
      onKeydown,
      onPaste,
      onBlur
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
