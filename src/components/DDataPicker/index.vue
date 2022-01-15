<template>
  <div class="d-data-picker">
    <div>
      <d-data>

      </d-data>
      <d-pagination/>
    </div>
    <d-motion-transform>

    </d-motion-transform>
  </div>
</template>

<script>
import DData from '@/components/DData'
import DMotionTransform from '@/components/DMotionTransform'
import DPagination from '@/components/DPagination'
import { props } from './props'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DDataPicker',
  components: {
    DData,
    DMotionTransform,
    DPagination
  },
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
