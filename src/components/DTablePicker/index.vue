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
      :value="page"
      :count="count"
      :rows="propRows"
      :menu="menu"
      :length="0"
      :show-info="true"
      @on-click="onPage"
      @on-rows="onRows"
    />
  </div>
</template>

<script>
import DPagination from '@/components/DPagination'
import DTable from '@/components/DTable'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useList from '@/components/DTable/useList'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DTablePicker',
  components: {
    DPagination,
    DTable
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const { rows } = toRefs(props)

    const {
      propSort,
      propDest,
      propHeaders,
      propItems,
      onSort
    } = useList(props, context)

    const page = ref(1)
    const count = computed(() => propItems.value.length)
    const propRows = useWatch(rows, () => rows.value, ['init'])
    const propItemsByPage = computed(() => {
      const start = (page.value - 1) * propRows.value
      return propItems.value.slice(start, start + propRows.value)
    })

    const onCheckbox = event => context.emit('on-input', event)
    const onPage = ({ value }) => {
      page.value = value
    }
    const onRows = ({ value }) => {
      propRows.value = value
    }

    const classList = computed(() => {
      return {
        [`shape-${props.shape}`]: props.shape
      }
    })

    useAdmin('d-table-picker', context)

    return {
      page,
      count,
      propSort,
      propDest,
      propHeaders,
      propRows,
      propItemsByPage,
      onSort,
      onCheckbox,
      onPage,
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
