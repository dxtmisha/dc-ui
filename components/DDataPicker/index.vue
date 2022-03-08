<template>
  <div :class="classList" class="d-data-picker">
    <d-progress :visible="progress"/>
    <d-control-position v-if="bindData.items" :disabled="disabledPosition" @on-position="onPosition">
      <template v-slot:default="{ className }">
        <d-control-selection :disabled="disabledSelection" @on-selected="onSelected">
          <template v-slot:default="{ classSelectionName, onClick }">
            <d-data
              :open="open"
              :position-class="className"
              :selected="selected"
              :selection-class="classSelectionName"
              class="d-data-picker__data"
              v-bind="bindData"
              @click="onClick"
              @on-open="onClose"
            >
              <template
                v-for="(html, name) in $slots"
                :key="name"
                v-slot:[name]="{ item, itemValue, value, text }"
              >
                <slot
                  :item="item"
                  :item-value="itemValue"
                  :value="value"
                  :name="name"
                  :on="() => onTransform(item, itemValue)"
                  :onFocus="() => onFocus(item, itemValue)"
                  :text="text"
                />
              </template>
            </d-data>
          </template>
        </d-control-selection>
      </template>
    </d-control-position>
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
import DData from '../DData'
import DPagination from '../DPagination'
import DProgress from '../DProgress'
import { props } from './props'
import { computed, ref, toRefs, watch } from 'vue'
import Translation from '../../classes/Translation'
import useAdmin from '../../uses/useAdmin'
import useData from './useData'
import useFilters from './useFilters'
import useObjectList from '../../uses/useObjectList'
import usePagination from '../DTablePicker/usePagination'
import useRows from '../DTablePicker/useRows'
import DControlPosition from '../DControlPosition'
import DControlSelection from '../DControlSelection'

export default {
  name: 'DDataPicker',
  components: {
    DControlSelection,
    DControlPosition,
    DData,
    DPagination,
    DProgress
  },
  props,
  emits: ['on-click', 'on-page', 'on-position', 'on-selected'],
  setup (props, context) {
    const {
      list,
      ajax,
      request
    } = toRefs(props)

    const text = Translation.getByList([
      'Your search did not match any documents.'
    ])

    const selected = ref(undefined)
    const selectedItem = ref(undefined)
    const open = ref(selected.value && 'body' in context.slots ? selected.value : undefined)

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

    const update = () => beforeOpening(true)
    const setSelected = (
      item,
      itemValue
    ) => {
      if (!props.disabled) {
        if (itemValue === selected.value) {
          selected.value = undefined
          selectedItem.value = undefined
        } else {
          selected.value = itemValue
          selectedItem.value = item
        }
      }

      return selectedItem.value
    }

    const onFocus = (item, itemValue) => context.emit('on-click', {
      type: 'focus',
      item: setSelected(item, itemValue)
    })
    const onTransform = (item = undefined, itemValue = undefined) => {
      if ('body' in context.slots) {
        if (
          selected.value === open.value ||
          selected.value === undefined
        ) {
          setSelected(item, itemValue)
          open.value = selected.value
        } else {
          open.value = open.value === itemValue ? undefined : itemValue
        }

        context.emit('on-click', {
          type: 'open',
          item: open.value ? item : undefined
        })
      } else {
        onFocus(item, itemValue)
      }
    }
    const onClose = ({ open }) => {
      if (!open) {
        onTransform()
      }
    }
    const onPosition = event => context.emit('on-position', event)
    const onSelected = event => context.emit('on-selected', event)

    watch([ajax, list, request], update)
    watch(propItemsByPage, async () => {
      if (
        propItemsByPage.value.length < propRows.value ||
        propFiltersMax.value <= propRows.value * propPage.value
      ) {
        await next()
      }
    })

    update()

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
      update,
      onPage,
      onMore,
      onRows,
      onFocus,
      onTransform,
      onClose,
      onPosition,
      onSelected
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
