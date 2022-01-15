<template>
  <div class="d-data-picker"></div>
</template>

<script>
import { props } from '@/components/DDataPicker/props'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DDataPicker',
  props,
  setup (props, context) {
    useAdmin('d-data-picker', context)

    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-data-picker {
  @include dataPickerInit;
}
</style>
