<template>
  <div class="d-actions" :class="classList">
    <d-button
      v-for="item in propBarAction"
      :key="item.value"
      appearance="text"
      v-bind="item"
      class="d-actions__action"
      @on-click="onClick"
    />
    <div class="d-actions__spacer">
      <d-button
        v-for="item in propBar"
        :key="item.value"
        appearance="text-color"
        class="d-actions__bar window-close"
        v-bind="item"
        @on-click="onClick"
      />
    </div>
    <slot class-spacer="d-actions__spacer"/>
  </div>
</template>

<script>
import DButton from '../DButton'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useBar from './useBar'

export default {
  name: 'DActions',
  components: { DButton },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const {
      propBar,
      propBarAction
    } = useBar(props)

    const classList = computed(() => {
      return {
        [`size-${props.size}`]: props.size,
        [`align-${props.align}`]: props.align,
        [`axis-${props.axis}`]: props.axis
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-actions', context)

    return {
      propBar,
      propBarAction,
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
