<template>
  <div>
    <input ref="input" :value="value" readonly/>
    <d-button
        :icon="iconCopy"
        appearance="text"
        @click="onClick"
    />
  </div>
</template>

<script>
import DButton from '../DButton'
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useClipboard from '../../uses/useClipboard'

export default {
  name: 'DClipboard',
  components: { DButton },
  props,
  emits: ['on-clipboard'],
  setup (props, context) {
    const input = ref(undefined)

    const {
      clipboardInit
    } = useClipboard()

    const onClick = () => {
      clipboardInit(input.value)
      context.emit('on-clipboard', { value: props.value })
    }

    useAdmin('d-clipboard', context)

    return {
      input,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-clipboard {
  @include clipboardInit;
}
</style>
