<template>
  <div :class="classList" class="d-table-picker">
    <d-table v-bind="bindTable" @on-sort="onSort" @on-input="onCheckbox">
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
      v-bind="bindPagination"
      @on-click="onPage"
      @on-more="onMore"
      @on-rows="onRows"
    />
  </div>
</template>

<script>
import DPagination from './../DPagination'
import DTable from './../DTable'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useList from './../DTable/useList'
import usePagination from './usePagination'
import useRows from './useRows'
import useTable from './useTable'

export default {
  name: 'DTablePicker',
  components: {
    DPagination,
    DTable
  },
  props,
  emits: ['on-input', 'on-page'],
  setup (props, context) {
    const {
      propSort,
      propDest,
      propItems,
      onSort
    } = useList(props, context)

    const {
      propPage,
      propRows,
      propItemsByPage,
      onPage,
      onMore,
      onRows
    } = useRows(props, propItems, context)

    const count = computed(() => propItems.value.length)

    const bindTable = useTable(
      props,
      propItemsByPage,
      propSort,
      propDest
    )

    const bindPagination = usePagination(
      props,
      propPage,
      count,
      propRows
    )

    const classList = computed(() => {
      return { [`shape-${props.shape}`]: props.shape }
    })

    const onCheckbox = event => context.emit('on-input', event)

    useAdmin('d-table-picker', context)

    return {
      bindTable,
      bindPagination,
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
