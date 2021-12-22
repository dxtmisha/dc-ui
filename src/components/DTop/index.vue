<template>
  <div ref="top" class="d-top" :class="classList">
    <d-button
      v-bind="propClose"
      @on-click="onClick"
    />
    <div class="d-top__title" v-html="propAction ? textAction : text"/>
    <template v-if="propAction">
      <d-button
        v-for="item in propBarAction"
        :key="item.value"
        v-bind="item"
        @on-click="onClick"
      />
    </template>
    <template v-else>
      <d-button
        v-for="item in propBar"
        :key="item.value"
        v-bind="item"
        @on-click="onClick"
      />
    </template>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import { props } from './props'
import { computed, ref } from 'vue'
import useAction from '@/--components/DAppBar/useAction'
import useAdmin from '@/uses/useAdmin'
import useBar from '@/components/DTop/useBar'

export default {
  name: 'DTop',
  components: { DButton },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const top = ref(undefined)
    const { propAction } = useAction(top, props)

    const {
      propBar,
      propBarAction,
      propClose
    } = useBar(props)

    const classList = computed(() => {
      return {
        'status-action': propAction.value,
        [`size-${props.size}`]: props.size
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-top', context)

    return {
      top,
      propBar,
      propBarAction,
      propClose,
      propAction,
      classList,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-top {
  @include topInit;
}
</style>
