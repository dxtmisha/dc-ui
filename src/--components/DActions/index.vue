<template>
  <div :class="classList">
    <slot name="barManagement" className="d-actions__management"/>
    <d-button
      v-for="item in propBarManagement"
      v-bind="item"
      :key="item.value"
      @on-click="onClick"
    />
    <span class="d-actions__spacer"/>
    <d-button
      v-for="item in propBar"
      v-bind="item"
      :key="item.value"
      @on-click="onClick"
    />
    <slot name="bar" className="d-actions__bar"/>
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
        class: 'd-actions__bar window-close',
        appearance: 'text-color',
        size: props.size,
        ellipsis: false,
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
        size: props.size,
        shape: 'pill',
        ellipsis: false,
        ...props.attrsBarManagement,
        ...item
      }))

      return list
    })

    const classList = computed(() => {
      return {
        'd-actions': true,
        [`size-${props.size}`]: props.size,
        [`axis-${props.axis}`]: props.axis,
        [`align-${props.align}`]: props.align
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
