<template>
  <div :class="classList" class="d-data-picker">
    <d-progress :visible="progress"/>
    <d-motion-cell class="d-data-picker__body">
      <d-skeleton
        :delay="0"
        :item-secondary="skeletonItemSecondary"
        :item-text="skeletonItemText"
        :progress="progress && !propItemsByPage.length"
        class="d-data-picker__data"
      >
        <d-data v-bind="bindData" :selected="selected">
          <template
            v-for="(html, name) in $slots"
            :key="name"
            v-slot:[name]="{ item }"
          >
            <slot :name="name" :item="item" :on="() => onClick(item)"/>
          </template>
        </d-data>
      </d-skeleton>
      <d-motion-transform :open="!!selected" class="d-data-picker__info">
        <template v-slot:default>
          <slot name="item" :item="selectedItem"/>
        </template>
      </d-motion-transform>
    </d-motion-cell>
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
import DSkeleton from '@/components/DSkeleton'
import { props } from './props'
import { computed, ref, toRefs, watch } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useData from './useData'
import useObjectList from '@/uses/useObjectList'
import usePagination from '@/components/DTablePicker/usePagination'
import useRows from '@/components/DTablePicker/useRows'
import DMotionTransform from '@/components/DMotionTransform'
import DMotionCell from '@/components/DMotionCell'

export default {
  name: 'DDataPicker',
  components: {
    DMotionCell,
    DMotionTransform,
    DData,
    DPagination,
    DProgress,
    DSkeleton
  },
  props,
  emits: ['on-click', 'on-page'],
  setup (props, context) {
    const {
      list,
      ajax
    } = toRefs(props)

    const selected = ref(undefined)
    const selectedItem = ref(undefined)

    const {
      progress,
      propList,
      propMax,
      beforeOpening,
      next
    } = useObjectList(props)

    const {
      propPage,
      propRows,
      propItemsByPage,
      onPage,
      onMore,
      onRows
    } = useRows(props, propList, context)

    const bindData = useData(props, propItemsByPage)
    const bindPagination = usePagination(
      props,
      propPage,
      propMax,
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

      context.emit('on-click', { item })
    }

    watch([ajax, list], () => beforeOpening(true))
    watch(propItemsByPage, async () => {
      if (propItemsByPage.value.length < propRows.value) {
        await next()
      }
    })

    useAdmin('d-data-picker', context)

    return {
      progress,
      selected,
      selectedItem,
      propItemsByPage,
      bindData,
      bindPagination,
      classList,
      onPage,
      onMore,
      onRows,
      onClick
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
