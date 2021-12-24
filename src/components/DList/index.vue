<template>
  <div class="d-list" :class="classList">
    <template
      v-for="item in propList"
      :key="item.value"
    >
      <div v-if="item.html" class="d-list__html window-static" v-html="item.html"/>
      <div v-else-if="item.subtitle" class="d-list__subtitle window-static" v-text="item.subtitle"/>
      <div v-else-if="item.line" class="d-list__line window-static"/>
      <div v-else-if="item.space" class="d-list__space window-static"/>

      <div v-else-if="item.list" class="d-list__group" :class="item.list.class">
        <d-list-item
          v-bind="item.item"
          class="window-static"
          :icon-trailing="iconArrowDown"
          :turn="item.list.open"
          @on-click="item.list.on"
        />
        <d-list
          v-if="item.list.open"
          v-bind="item.list.props"
          :list="item.list.list"
          @on-click="onClick"
        />
      </div>

      <d-menu v-else-if="item.menu" v-bind="item.menu" @on-input="onClick">
        <template v-slot:default="{ classList, onClick, open, progress }">
          <d-list-item
            v-bind="item.item"
            class="ls-menu window-static"
            :class="classList"
            :icon-trailing="iconMenu"
            :focus="open || item.item.focus"
            :turn="open"
            :progress="progress"
            @click="onClick"
          />
        </template>
      </d-menu>

      <d-list-item v-else v-bind="item.item" @on-click="onClick"/>
    </template>
  </div>
</template>

<script>
import DListItem from '@/components/DListItem'
import { props } from './props'
import { computed, defineAsyncComponent } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useItems from './useItems'

export default {
  name: 'DList',
  components: {
    DListItem,
    DMenu: defineAsyncComponent(() => import('@/components/DMenu'))
  },
  props,
  emits: ['on-click', 'on-group'],
  setup (props, context) {
    const iconMenu = computed(() => props.axis === 'x' ? undefined : props.iconArrowRight)

    const propList = useItems(props, context)

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        [`axis-${props.axis}`]: props.axis,
        [`shape-${props.shape}`]: props.shape,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`navigation-rail-${props.navigationRail}`]: props.navigationRail,
        'option-dense': props.dense,
        ...palette.value
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-list', context)

    return {
      iconMenu,
      propList,
      classList,
      onClick
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
