<template>
  <div ref="app" v-bind="binds" class="d-bottom-navigation">
    <div class="d-bottom-navigation__body">
      <d-list-item
        v-for="item in bindItems"
        v-bind="item"
        :key="item.value"
        class="d-bottom-navigation__item"
        @on-click="onClick"
      />
    </div>
  </div>
</template>

<script>
import DListItem from './../DListItem'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useColor from './../../uses/useColor'
import useItems from '../DTab/useItems'
import useScroll from './useScroll'

export default {
  name: 'DBottomNavigation',
  components: { DListItem },
  props,
  emit: ['on-click'],
  setup (props, context) {
    const { selected } = toRefs(props)

    const app = ref(undefined)
    const bindItems = useItems(props, selected)

    useScroll(app, props)

    const palette = useColor(props)
    const binds = computed(() => {
      return {
        class: {
          [`appearance-${props.appearance}`]: props.appearance,
          [`shape-${props.shape}`]: props.shape,
          [`scroll-${props.scroll}`]: props.scroll,
          ...palette.value
        }
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-bottom-navigation', context)

    return {
      app,
      bindItems,
      binds,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-bottom-navigation {
  @include bottomNavigationInit;
}
</style>
