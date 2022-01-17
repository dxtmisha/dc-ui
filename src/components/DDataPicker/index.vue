<template>
  <div :class="classList" class="d-data-picker">
    <d-progress :visible="progress"/>
    <d-data
      v-if="bindData.items"
      :open="open"
      :selected="selected"
      class="d-data-picker__data"
      v-bind="bindData"
      @on-open="onClose"
    >
      <template
        v-for="(html, name) in $slots"
        :key="name"
        v-slot:[name]="{ item, text }"
      >
        <slot
          :item="item"
          :name="name"
          :on="() => onClick(item)"
          :text="text"
        />
      </template>
    </d-data>
    <div v-else class="d-data-picker__none">{{ text['Your search did not match any documents.'] }}</div>
    <d-pagination
      class="d-data-picker__pagination"
      v-bind="bindPagination"
      @on-click="onPage"
      @on-more="onMore"
      @on-rows="onRows"
    />
  </div>
</template>

<script>
import DData from '@/components/DData'
import DPagination from '@/components/DPagination'
import DProgress from '@/components/DProgress'
import { props } from './props'
import { computed, ref, toRefs, watch } from 'vue'
import Translation from '@/classes/Translation'
import useAdmin from '@/uses/useAdmin'
import useData from './useData'
import useFilters from './useFilters'
import useObjectList from '@/uses/useObjectList'
import usePagination from '@/components/DTablePicker/usePagination'
import useRows from '@/components/DTablePicker/useRows'

export default {
  name: 'DDataPicker',
  components: {
    DData,
    DPagination,
    DProgress
  },
  props,
  emits: ['on-click', 'on-page'],
  setup (props, context) {
    const {
      list,
      ajax
    } = toRefs(props)

    const text = Translation.getByList([
      'Your search did not match any documents.'
    ])

    const selected = ref(undefined)
    const selectedItem = ref(undefined)
    const open = computed(() => selected.value && 'body' in context.slots ? selected.value : undefined)

    const {
      progress,
      propList,
      propMax,
      beforeOpening,
      next
    } = useObjectList(props)

    const {
      propFilters,
      propFiltersMax
    } = useFilters(props, propList, propMax)

    const {
      propPage,
      propRows,
      propItemsByPage,
      onPage,
      onMore,
      onRows
    } = useRows(props, propFilters, context)

    const bindData = useData(props, propItemsByPage)
    const bindPagination = usePagination(
      props,
      propPage,
      propFiltersMax,
      propRows
    )

    const classList = computed(() => {
      return {
        'status-selected': selected.value
      }
    })

    const onClick = item => {
      if (!props.disabled) {
        if (item.value === selected.value) {
          selected.value = undefined
          selectedItem.value = undefined
        } else {
          selected.value = item.value
          selectedItem.value = item
        }
      }

      context.emit('on-click', { item: selectedItem.value })
    }
    const onClose = ({ open }) => {
      if (!open) {
        selected.value = undefined
        selectedItem.value = undefined
        context.emit('on-click', { item: undefined })
      }
    }

    watch([ajax, list], () => beforeOpening(true))
    watch(propItemsByPage, async () => {
      if (propItemsByPage.value.length < propRows.value) {
        await next()
      }
    })

    useAdmin('d-data-picker', context)

    return {
      text,
      progress,
      selected,
      selectedItem,
      open,
      propItemsByPage,
      bindData,
      bindPagination,
      classList,
      onPage,
      onMore,
      onRows,
      onClick,
      onClose
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
