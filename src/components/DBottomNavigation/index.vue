<template>
  <div ref="app" v-bind="binds" class="d-bottom-navigation">
    <div class="d-bottom-navigation__body">
      <d-list-item
        v-bind="item"
        v-for="item in bindItems"
        :key="item.value"
        class="d-bottom-navigation__item"
      />
    </div>
  </div>
</template>

<script>
import DListItem from '@/components/DListItem'
import { props } from '@/components/DBottomNavigation/props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useItems from './useItems'
import useScroll from './useScroll'

export default {
  name: 'DBottomNavigation',
  components: { DListItem },
  props,
  setup (props, context) {
    const app = ref(undefined)
    const bindItems = useItems(props)

    useScroll(app, props)

    const palette = useColor(props)
    const binds = computed(() => {
      return {
        class: {
          [`appearance-${props.appearance}`]: props.appearance,
          [`size-${props.size}`]: props.size,
          [`shape-${props.shape}`]: props.shape,
          [`scroll-${props.scroll}`]: props.scroll,
          ...palette.value
        }
      }
    })

    useAdmin('d-bottom-navigation', context)

    return {
      app,
      bindItems,
      binds
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
