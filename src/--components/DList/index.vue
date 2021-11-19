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
          :focus="focus"
          :selected="selected"
          @on-click="onClick"
        />
      </div>
      <d-menu
        v-else-if="item.menu"
        v-bind="item.menu"
        :selected="selected"
        @on-input="onClick"
      >
        <template v-slot:default="{classList, onClick, open, progress}">
          <d-list-item
            v-bind="item.item"
            class="ls-menu window-static"
            :class="classList"
            :icon-trailing="iconArrowRight"
            :focus="open || isFocus(item.value)"
            :turn="open"
            @click="onClick"
          >
            <d-progress
              v-if="item.menu?.ajax"
              :bottom="true"
              :visible="progress"
            />
          </d-list-item>
        </template>
      </d-menu>
      <d-list-item
        v-else
        v-bind="item.item"
        :focus="isFocus(item.value)"
        :selected="isSelect(item.value)"
        @on-click="onClick"
      />
    </template>
  </div>
</template>

<script>
import DListItem from '@/--components/DListItem'
import DProgress from '@/--components/DProgress'
import { props } from '@/components/DList/props'
import { computed, defineAsyncComponent, toRefs } from 'vue'
import { isSelected } from '@/dcUi'
import { setupListItem } from '@/--components/DList/setupListItem'
import { useColor } from '@/uses/useColor'
import { useGroup } from '@/--components/DList/useGroup'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DList',
  components: {
    DProgress,
    DMenu: defineAsyncComponent(() => import('@/--components/DMenu')),
    DListItem
  },
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
    const { valueList } = setupListItem(props, context)

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

    useAdmin('d-list-old')

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
</style>
