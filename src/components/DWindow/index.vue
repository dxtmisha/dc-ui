<template>

</template>

<script>
import { props } from '@/components/DWindow/props'
import { ref } from 'vue'
import { usePersistent } from '@/components/DWindow/usePersistent'

export default {
  name: 'DWindow',
  props,
  setup (props) {
    const modal = ref(undefined)

    const {
      classPersistent,
      onPersistent
    } = usePersistent(modal)

    return {
      modal,
      onPersistent
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-window {
  @include windowInit;
}
</style>
