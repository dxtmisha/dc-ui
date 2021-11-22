<template>
  <component
    ref="input"
    :is="tag"
    class="d-mask"
    type="text"
    :pattern="propPattern"
    v-on="on"
    @keypress.prevent="onKeypress"
    @keydown="onKeydown"
    @paste.prevent="onPaste"
    @blur="onBlur"
  />
</template>

<script>
import { props } from '@/components/DMask/props'
import { ref, toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useCharacter } from '@/components/DMask/useCharacter'
import { useEvent } from '@/components/DMask/useEvent'
import { useInit } from '@/components/DMask/useInit'
import { useValidity } from '@/components/DMask/useValidity'
import { useValue } from '@/components/DMask/useValue'
import { useWatch } from '@/uses/useWatch'

export default {
  name: 'DMask',
  props,
  emits: ['on-change', 'on-input'],
  setup (props, context) {
    const {
      mask,
      value,
      match,
      pattern
    } = toRefs(props)

    const input = ref(false)
    const resetValue = () => resetCharacter(value.value)

    const {
      propMask
    } = useInit(mask)
    const propPattern = useWatch([propMask, pattern], data => {
      data.value = pattern.value || `.{${propMask.value?.length}}`
    })

    const {
      standard,
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
      context
    )

    const { cancel } = useValue(
      value,
      resetValue,
      resetCharacter
    )

    useAdmin('d-mask')

    return {
      input,
      propPattern,
      validationMessage,
      cancel,
      checkValidity,
      onKeypress,
      onKeydown,
      onPaste,
      onBlur
    }
  }
}
</script>

<style lang="scss"></style>
