<template>
  <div v-bind="binds" class="d-tab">
    <d-list-item
      v-for="item in bindItems"
      v-bind="item"
      :key="item.value"
      class="d-tab__item"
      @on-click="onClick"
    />
  </div>
</template>

<script>
import DListItem from '@/components/DListItem'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useItems from './useItems'

export default {
  name: 'DTab',
  components: { DListItem },
  props,
  emit: ['on-click'],
  setup (props, context) {
    const bindItems = useItems(props)

    const binds = computed(() => {
      return {
        class: {
          [`appearance-${props.appearance}`]: props.appearance,
          [`shape-${props.shape}`]: props.shape
        }
      }
    })

    const onClick = event => {
      context.emit('on-click', event)
    }

    useAdmin('d-tab', context)

    return {
      bindItems,
      binds,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-tab {
  @include tabInit;
}
</style>
