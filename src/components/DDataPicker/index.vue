<template>
  <div class="d-data-picker">
    <div>
      <d-data v-bind="bindData">

      </d-data>
      <d-pagination
        class="d-data-picker__pagination"
        v-bind="bindPagination"
        @on-click="onPage"
        @on-more="onMore"
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
import useData from './useData'
import useObjectList from '@/uses/useObjectList'
import useRows from '@/components/DTablePicker/useRows'
import usePagination from '@/components/DTablePicker/usePagination'

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
      onMore,
      onRows
    } = useRows(props, propList)

    const bindData = useData(props, propItemsByPage)
    const bindPagination = usePagination(
      props,
      page,
      propMax,
      propRows
    )

    useAdmin('d-data-picker', context)

    return {
      propItemsByPage,
      bindData,
      bindPagination,
      onPage,
      onMore,
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
