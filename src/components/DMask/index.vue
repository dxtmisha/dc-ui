<template>
  <label class="d-mask">
    <span class="d-mask__view">
      <input
        ref="input"
        class="d-mask__input"
        :pattern="propPattern"
        @keypress.prevent="onKeypress"
        @keydown="onKeydown"
        @paste.prevent="onPaste"
      />
      <span ref="chars" class="d-mask__chars"></span>
    </span>
  </label>
</template>

<script>
import { props } from '@/components/DMask/props'
import { ref, toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useMask } from '@/components/DMask/useMask'
import { useCharacter } from '@/components/DMask/useCharacter'
import { useValue } from '@/components/DMask/useValue'
import { useEvent } from '@/components/DMask/useEvent'

export default {
  name: 'DMask',
  props,
  setup (props) {
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

    const input = ref(false)
    const chars = ref(false)

    const {
      geo,
      propMask,
      propView,
      propPattern,
      getDate,
      setDate
    } = useMask(
      mask,
      pattern,
      type,
      locales
    )

    const {
      character,
      ifSpecialChar,
      setValue,
      pasteValue,
      popValue
    } = useCharacter(
      input,
      geo,
      propMask,
      value,
      match
    )

    const {
      propValue,
      standard,
      sample,
      change
    } = useValue(
      input,
      character,
      propMask,
      ifSpecialChar
    )

    const {
      onKeypress,
      onKeydown,
      onPaste
    } = useEvent(
      input,
      standard,
      setValue,
      popValue,
      pasteValue
    )

    useAdmin('d-mask')

    return {
      input,
      chars,
      propPattern,
      onKeypress,
      onKeydown,
      onPaste
    }
  }
}
</script>

<style lang="scss">

</style>
