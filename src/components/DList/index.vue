<template>
  <div :class="classList">
    <template
      v-for="item in propList"
      :key="item.value"
    >
      <div v-if="item.html" class="d-list__html window-static" v-html="item.html"/>
      <div v-else-if="item.subtitle" class="d-list__subtitle window-static" v-text="item.subtitle"/>
      <div v-else-if="item.line" class="d-list__line window-static"/>
      <div v-else-if="item.space" class="d-list__space window-static"/>
      <div
        v-else-if="item.list"
        class="d-list__group"
        :class="{ 'status-open': item.group }"
      >
        <d-list-item
          v-bind="item.item"
          class="window-static"
          :icon-trailing="iconArrowDown"
          :turn="item.group"
          @on-click="onGroup(item.value, item.group = !item.group)"
        />
        <keep-alive>
          <d-list
            v-if="item.group"
            v-bind="item.list"
            @on-click="onClick"
          />
        </keep-alive>
      </div>
      <d-menu
        v-else-if="item.menu"
        v-bind="item.menu"
        @on-input="onClick"
      >
        <template v-slot:default="{ classList, onClick, open, progress }">
          <d-list-item
            v-bind="item.item"
            class="ls-menu window-static"
            :class="classList"
            :icon-trailing="iconArrowRight"
            :focus="open || item.item.focus"
            :turn="open"
            :progress="progress"
            @click="onClick"
          />
        </template>
      </d-menu>
      <d-list-item
        v-else
        v-bind="item.item"
        @on-click="onClick"
      />
    </template>
  </div>
</template>

<script>
import DListItem from '@/components/DListItem'
import { props } from '@/components/DList/props'
import { defineAsyncComponent, toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useColor } from '@/uses/useColor'
import { useItems } from '@/components/DList/useItems'
import { useWatch } from '@/uses/useWatch'

export default {
  name: 'DList',
  components: {
    DListItem,
    DMenu: defineAsyncComponent(() => import('@/components/DMenu'))
  },
  props,
  emits: ['on-click', 'on-group'],
  setup (props, context) {
    const {
      list,
      group,
      menu,
      focus,
      selected,
      underline,
      axis,
      navigationRail,
      color,
      palette,
      tag,
      appearance,
      size,
      shape,
      adaptive,
      dense,
      border,
      ripple,
      iconArrowDown,
      iconArrowRight,
      iconAnimationShow,
      iconBackground
    } = toRefs(props)

    const {
      propList
    } = useItems(
      list,
      group,
      menu,
      focus,
      selected,
      underline,
      axis,
      navigationRail,
      tag,
      appearance,
      size,
      shape,
      adaptive,
      dense,
      border,
      ripple,
      iconArrowDown,
      iconArrowRight,
      iconAnimationShow,
      iconBackground
    )

    const { classColor } = useColor(color, palette)

    const classList = useWatch([
      classColor,
      axis,
      navigationRail,
      shape,
      adaptive,
      dense
    ], data => {
      data.value = {
        'd-list': true,
        ...classColor.value,
        [`axis-${axis.value}`]: axis.value,
        [`navigation-rail-${navigationRail.value}`]: navigationRail.value,
        [`shape-${shape.value}`]: shape.value,
        [`adaptive-${adaptive.value}`]: adaptive.value,
        'option-dense': dense.value
      }
    })

    const onClick = event => context.emit('on-click', event)
    const onGroup = (value, open) => {
      context.emit('on-group', {
        value,
        open
      })
    }

    useAdmin('d-list')

    return {
      propList,
      classList,
      onClick,
      onGroup
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
