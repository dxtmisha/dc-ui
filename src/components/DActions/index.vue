<template>
  <div :class="classList">
    <slot name="barManagement"/>
    <d-button
      v-for="item in propBarManagement"
      v-bind="item"
      :key="item.value"
      @on-click="onClick"
    />
    <span class="d-actions__spacer"/>
    <slot name="bar"/>
    <d-button
      v-for="item in propBar"
      v-bind="item"
      :key="item.value"
      @onClick="onClick"
    />
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import { props } from './props'
import { computed } from 'vue'

export default {
  name: 'DActions',
  components: { DButton },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const propBar = computed(() => {
      const list = []

      props.bar?.forEach(item => list.push({
        item,
        class: 'window-close',
        appearance: 'text-color',
        ...props.attrsBar,
        ...item
      }))

      return list
    })
    const propBarManagement = computed(() => {
      const list = []

      props.barManagement?.forEach(item => list.push({
        item,
        class: 'd-actions__management',
        appearance: 'text',
        shape: 'pill',
        ...props.attrsBarManagement,
        ...item
      }))

      return list
    })

    const classList = computed(() => {
      return {
        'd-actions': true,
        [`axis-${props.axis}`]: props.axis
      }
    })

    const onClick = event => context.emit('on-click', event)

    return {
      propBar,
      propBarManagement,
      classList,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-actions {
  @include actionsInit;
}
</style>
