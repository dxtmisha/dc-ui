<template>
  <div :class="classList" class="d-table-picker">
    <d-table
      :headers="propHeaders"
      :headers-init="false"
      :translation="translation"
      :keyText="keyText"
      :keyValue="keyValue"
      :items="propItemsByPage"
      :sort="propSort"
      :dest="propDest !== 1"
      :readonly="true"
      :checkbox="checkbox"
      :size="size"
      :align="align"
      :sticky="sticky"
      :dense="dense"
      @on-sort="onSort"
      @on-input="onCheckbox"
    >
      <template
        v-for="(html, name) in $slots"
        :key="name"
        v-slot:[name]="{ item }"
      >
        <slot :name="name" :item="item"/>
      </template>
    </d-table>
    <d-pagination
      class="d-table-picker__pagination"
      :value="propPage"
      :count="count"
      :rows="propRows"
      :menu="menu"
      :length="0"
      :show-info="showInfo"
      :show-more="showMore"
      @on-click="onPage"
      @on-more="onMore"
      @on-rows="onRows"
    />
  </div>
</template>

<script>
import DPagination from '@/components/DPagination'
import DTable from '@/components/DTable'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useHeaders from '@/components/DTable/useHeaders'
import useList from '@/components/DTable/useList'
import useRows from '@/components/DTablePicker/useRows'

export default {
  name: 'DTablePicker',
  components: {
    DPagination,
    DTable
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const propHeaders = useHeaders(props)
    const {
      propSort,
      propDest,
      propItems,
      onSort
    } = useList(props, context)

    const count = computed(() => propItems.value.length)
    const {
      propPage,
      propRows,
      propItemsByPage,
      onPage,
      onMore,
      onRows
    } = useRows(props, propItems)

    const onCheckbox = event => context.emit('on-input', event)

    const classList = computed(() => {
      return {
        [`shape-${props.shape}`]: props.shape
      }
    })

    useAdmin('d-table-picker', context)

    return {
      propPage,
      count,
      propSort,
      propDest,
      propHeaders,
      propRows,
      propItemsByPage,
      onSort,
      onCheckbox,
      onPage,
      onMore,
      onRows,
      classList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-table-picker {
  @include tablePickerInit;
}
</style>
