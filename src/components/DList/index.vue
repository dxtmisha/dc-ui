<template>
  <div class="d-list" :class="classList">
    <template
      v-for="{html, item, line, list, menu, space, subtitle, value} in propList"
      :key="value"
    >
      <div v-if="html" class="d-list__html window-static" v-html="html"/>
      <div v-else-if="subtitle" class="d-list__subtitle window-static" v-text="subtitle"/>
      <div v-else-if="line" class="d-list__line window-static"/>
      <div v-else-if="space" class="d-list__space window-static"/>

      <div v-else-if="list" class="d-list__group" :class="list.class">
        <d-list-item
          v-bind="item"
          class="window-static"
          :icon-trailing="iconArrowDown"
          :turn="list.open"
          @on-click="list.on"
        />
        <d-list
          v-if="list.open"
          v-bind="list.props"
          :list="list.list"
          @on-click="onClick"
        />
      </div>

      <d-menu v-else-if="menu" v-bind="menu" @on-input="onClick">
        <template v-slot:default="{ classList, onClick, open, progress }">
          <d-list-item
            v-bind="item"
            class="ls-menu window-static"
            :class="classList"
            :icon-trailing="iconMenu"
            :focus="open || item.focus"
            :turn="open"
            :progress="progress"
            @click="onClick"
          />
        </template>
      </d-menu>

      <d-list-item v-else v-bind="item" @on-click="onClick"/>
    </template>
  </div>
</template>

<script>
import DListItem from './../DListItem'
import { props } from './props'
import { computed, defineAsyncComponent } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useColor from './../../uses/useColor'
import useItems from './useItems'

export default {
  name: 'DList',
  components: {
    DListItem,
    DMenu: defineAsyncComponent(() => import('./../DMenu'))
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
