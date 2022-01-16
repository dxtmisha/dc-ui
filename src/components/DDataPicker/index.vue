<template>
  <div class="d-data-picker">
    <div>
      <d-data>

      </d-data>
      <d-pagination
        class="d-data-picker__pagination"
        :value="page"
        :count="propMax"
        :rows="propRows"
        :menu="menu"
        :length="0"
        :show-info="true"
        @on-click="onPage"
        @on-rows="onRows"
      />
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
import useObjectList from '@/uses/useObjectList'
import useRows from '@/components/DTablePicker/useRows'

export default {
  name: 'DDataPicker',
  components: {
    DData,
    DMotionTransform,
    DPagination
  },
  props,
  setup (props, context) {
    const {
      progress,
      object,
      propList,
      propGroup,
      propMax,
      beforeOpening,
      next,
      onGroup
    } = useObjectList(props)

    const {
      page,
      propRows,
      propItemsByPage,
      onPage,
      onRows
    } = useRows(props, propList)

    useAdmin('d-data-picker', context)

    return {
      page,
      propMax,
      propRows,
      onPage,
      onRows
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-data-picker {
  @include dataPickerInit;
}
</style>
