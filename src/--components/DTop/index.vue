<template>
  <div ref="top" :class="classList">
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

export default {
  name: 'DTop',
  components: { DButton },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const top = ref(undefined)

    const initBar = (list, extra = {}) => {
      const bars = []

      list?.forEach(item => bars.push({
        ...item,
        class: 'd-top__bar window-close',
        appearance: 'text',
        size: 'medium',
        shape: props.shape || (item.text || !item.icon ? undefined : 'pill'),
        adaptive: 'auto',
        lowercase: true,
        dense: true,
        ...props.attrsButton,
        ...extra
      }))

      return bars
    }

    const propBar = computed(() => initBar(props.bar))
    const propBarAction = computed(() => initBar(props.barAction, { iconAnimationShow: true }))
    const propClose = computed(() => initBar(
      [{ icon: props.iconClose }],
      {
        class: 'window-close',
        value: 'cancel'
      }
    )[0])

    const { propAction } = useAction(top, props)

    const classList = computed(() => {
      return {
        'd-top': true,
        'status-action': propAction.value
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
