<template>
  <form
    :class="classList"
    :method="method"
  >

  </form>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DForm',
  props,
  emits: ['on-submit'],
  setup (props, context) {
    const classList = computed(() => {
      return {
        'd-form': true
      }
    })

    useAdmin('d-form', context)

    return {
      classList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-form {
  @include formInit;
}
</style>
