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
        :class="{ 'status-open': propGroup[item.value] }"
      >
        <d-list-item
          v-bind="item.item"
          class="window-static"
          :icon-trailing="iconArrowDown"
          :turn="propGroup[item.value]"
          @on-click="onGroup(item.value, propGroup[item.value] = !propGroup[item.value])"
        />
        <d-list
          v-if="propGroup[item.value]"
          v-bind="item.list"
          @on-click="onClick"
        />
      </div>
      <d-menu
        v-else-if="item.menu"
        v-bind="item.menu"
        :axis="propAxis"
        :indent="propIndent"
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
    const palette = useColor(props)
    const propAxis = computed(() => props.axis === 'x' ? 'y' : 'x')
    const propIndent = computed(() => props.axis === 'x' ? undefined : -4)

    const {
      propList,
      propGroup
    } = useItems(props)

    const classList = computed(() => {
      return {
        'd-list': true,
        [`axis-${props.axis}`]: props.axis,
        [`shape-${props.shape}`]: props.shape,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`navigation-rail-${props.navigationRail}`]: props.navigationRail,
        'option-dense': props.dense,
        ...palette.value
      }
    })

    const onClick = event => context.emit('on-click', event)
    const onGroup = (value, open) => {
      console.warn('value', value, open)
      context.emit('on-group', {
        value,
        open
      })
    }

    useAdmin('d-list', context)

    return {
      propAxis,
      propIndent,
      propList,
      propGroup,
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
