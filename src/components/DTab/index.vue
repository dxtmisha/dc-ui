<template>
  <div ref="tab" :class="classList" class="d-tab">
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
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useIndicator from './useIndicator'
import useItems from './useItems'

export default {
  name: 'DTab',
  components: { DListItem },
  props,
  emit: ['on-click'],
  setup (props, context) {
    const tab = ref(undefined)

    const propSelected = useIndicator(tab, props)
    const bindItems = useItems(props, propSelected)

    const getDirection = value => {
      const oldIndex = bindItems.value.findIndex(item => item.value === props.selected)
      const newIndex = bindItems.value.findIndex(item => item.value === value)

      return oldIndex < newIndex ? 'next' : 'back'
    }

    const classList = computed(() => {
      return {
        [`appearance-${props.appearance}`]: props.appearance,
        [`shape-${props.shape}`]: props.shape,
        'option-dynamic': props.dynamic
      }
    })

    const onClick = event => {
      context.emit('on-click', {
        ...event,
        direction: getDirection(event.value)
      })
    }

    useAdmin('d-tab', context)

    return {
      tab,
      bindItems,
      classList,
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
