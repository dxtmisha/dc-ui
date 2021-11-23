<template>

</template>

<script>
import { props } from '@/components/--DMaskDate/props'
import { ref, toRefs } from 'vue'

export default {
  name: 'DMaskDate',
  props,
  setup (props) {
    const {
      value
    } = toRefs(props)

    const input = ref(false)

    return {
      input
    }
  }
}
</script>

<style lang="scss">
@import "../--DMask/style";

.d-mask-date {
  @include maskDateInit;
}
</style>
