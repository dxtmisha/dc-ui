<template>
  <div :class="classList">
    <slot/>
    <template
      v-for="item in valueList"
      :key="item.value"
    >
      <div v-if="item.html" class="d-list__html window-static" v-html="item.html"/>
      <div v-else-if="item.subtitle" class="d-list__subtitle window-static" v-text="item.subtitle"/>
      <div v-else-if="item.line" class="d-list__line window-static"/>
      <div v-else-if="item.space" class="d-list__space window-static"/>
      <div
        v-else-if="item.list"
        class="d-list__group"
        :class="{'status-open': isGroupOpen(item.value)}"
      >
        <d-list-item
          v-bind="item.item"
          class="window-static"
          :icon-trailing="iconGroup"
          :focus="isFocus(item.value)"
          :turn="isGroupOpen(item.value)"
          @on-click="onGroup"
        />
        <d-list
          v-if="isGroupOpen(item.value)"
          v-bind="item.list"
          @on-click="onClick"
        />
      </div>
      <d-list-item
        v-else-if="item.item"
        v-bind="item.item"
        :focus="isFocus(item.value)"
        :selected="isSelect(item.value)"
        @on-click="onClick"
      />
    </template>
  </div>
</template>

<script>
import DListItem from '@/components/DListItem'
import { props } from '@/components/DList/props'
import { computed, toRefs } from 'vue'
import { isSelected } from '@/uses/useObject'
import { useGroup } from '@/components/DList/useGroup'
import { useList } from '@/components/DListItem/useList'
import { useColor } from '@/uses/useColors'

export default {
  name: 'DList',
  components: { DListItem },
  props,
  emits: ['on-click', 'on-group'],
  setup (props, context) {
    const {
      // Status
      focus,
      selected,

      // Options
      palette,
      color,
      axis,
      adaptive,
      navigationRail
    } = toRefs(props)

    const {
      iconGroup,
      isGroupOpen,
      onGroup
    } = useGroup(props, context)

    const { classColor } = useColor(color, palette)
    const { valueList } = useList(props, context)

    const isFocus = (value) => isSelected(value, focus.value)
    const isSelect = (value) => isSelected(value, selected.value)

    const classList = computed(() => {
      return {
        'd-list': true,
        ...classColor.value,
        [`axis-${axis.value}`]: axis.value,
        [`adaptive-${adaptive.value}`]: adaptive.value,
        [`navigation-rail-${navigationRail.value}`]: navigationRail.value
      }
    })

    return {
      isFocus,
      isSelect,
      valueList,
      classList,

      // Group
      iconGroup,
      isGroupOpen,
      onGroup
    }
  },
  methods: {
    onClick (event) {
      this.$emit('on-click', event)
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-list {
  @include listInit;
}
</style>
