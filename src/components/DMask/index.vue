<template>
  <label :class="classList">
    <span class="d-mask__view">
      <input
        ref="input"
        v-bind="attrsInput"
        class="d-mask__input"
        :value="standard"
        type="text"
        :pattern="propPattern"
        v-on="on"
        @keypress.prevent="onKeypress"
        @keydown="onKeydown"
        @paste.prevent="onPaste"
        @blur="onBlur"
        @change="onChange"
      />
      <span ref="chars" class="d-mask__chars">
        <span
          v-for="(item, key) in propChars"
          :key="key"
          :class="item.class"
          v-text="item.text"
        />
      </span>
    </span>
  </label>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCharacter from './useCharacter'
import useEvent from './useEvent'
import useMask from './useMask'
import useValue from './useValue'
import useView from './useView'

export default {
  name: 'DMask',
  props,
  emits: ['on-input', 'on-change'],
  setup (props, context) {
    const input = ref(undefined)
    const chars = ref(undefined)

    const {
      geo,
      propMask,
      propView,
      propPattern,
      setDate
    } = useMask(props)

    const {
      standard,
      newValue,
      setValue,
      pasteValue,
      popValue,
      cancel
    } = useCharacter(
      input,
      props,
      geo,
      propMask
    )

    const {
      validationCode,
      validationMessage,
      change,
      checkValidity
    } = useValue(
      input,
      props,
      geo,
      propView,
      standard,
      setDate,
      context
    )

    const {
      onKeypress,
      onKeydown,
      onPaste,
      onBlur,
      onChange
    } = useEvent(
      change,
      newValue,
      setValue,
      popValue,
      pasteValue
    )

    const { propChars } = useView(
      props,
      propView,
      standard,
      validationCode
    )

    const isCharacter = computed(() => !!standard.value)
    const classList = computed(() => {
      return {
        'd-mask': true,
        'status-character': isCharacter.value || props.visibleMask
      }
    })

    useAdmin('d-mask', context)

    return {
      input,
      chars,
      standard,
      propPattern,
      propChars,
      validationMessage,
      classList,
      checkValidity,
      cancel,
      onKeypress,
      onKeydown,
      onPaste,
      onBlur,
      onChange
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
