<template>
  <label :class="classList" class="d-mask">
    <span class="d-mask__view">
      <input
        ref="input"
        class="d-mask__input"
        v-bind="inputAttrs"
        :pattern="propPattern"
        :type="typeInput"
        :value="standard"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @input="onInput"
        @keydown="onKeydown"
        v-on="on"
        @keypress.prevent="onKeypress"
        @paste.prevent="onPaste"
      />
      <input
        v-if="type === 'date'"
        ref="inputDate"
        :max="max"
        :min="min"
        :value="propValueDate"
        class="d-mask__date"
        type="date"
      >
      <span ref="chars" class="d-mask__chars">
        <template v-if="propChars.length > 0">
          <span
            v-for="(item, key) in propChars"
            :key="key"
            :class="item.class"
            v-text="item.text"
          />
        </template>
        <span v-else>&nbsp;</span>
      </span>
    </span>
  </label>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useCharacter from './useCharacter'
import useEvent from './useEvent'
import useMask from './useMask'
import useValue from './useValue'
import useView from './useView'

export default {
  name: 'DMask',
  props,
  emits: [
    'on-blur',
    'on-focus',
    'on-input',
    'on-change'
  ],
  setup (props, context) {
    const input = ref(undefined)
    const inputDate = ref(undefined)
    const chars = ref(undefined)

    const {
      length,
      geo,
      propMask,
      propView,
      propPattern,
      propMax,
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
      length,
      geo,
      propMask,
      propMax
    )

    const {
      propValue,
      validationCode,
      validationMessage,
      change,
      checkValidity
    } = useValue(
      input,
      inputDate,
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
      onInput,
      onChange
    } = useEvent(
      standard,
      change,
      newValue,
      setValue,
      popValue,
      pasteValue,
      context
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
        [`type-${props.type}`]: props.type,
        'status-character': isCharacter.value || props.visible
      }
    })

    useAdmin('d-mask', context)

    return {
      input,
      inputDate,
      chars,
      standard,

      length,
      propValue,
      propValueDate: computed(() => {
        if (propMask.value.length === propValue.value.length) {
          return propValue.value
        } else {
          return ''
        }
      }),
      propPattern,
      propMax,
      propChars,
      validationMessage,

      classList,

      newValue,
      setValue,
      pasteValue,

      checkValidity,
      cancel,

      onKeypress,
      onKeydown,
      onPaste,
      onFocus: event => context.emit('on-focus', event),
      onBlur,
      onInput,
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
