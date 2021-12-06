<template>
  <div ref="top" :class="classList">
    <d-button v-bind="propClose"/>
    <div class="d-top__title" v-html="propAction ? textAction : text"/>
    <template v-if="propAction">
      <d-button
        v-for="item in propBarAction"
        :key="item.value"
        v-bind="item"
      />
    </template>
    <template v-else>
      <d-button
        v-for="item in propBar"
        :key="item.value"
        v-bind="item"
      />
    </template>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useAction from '@/components/DAppBar/useAction'

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
        size: 'small',
        shape: props.shape,
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
        shape: 'pill'
      }
    )[0])

    const { propAction } = useAction(top, props)

    const classList = computed(() => {
      return {
        'd-top': true,
        'status-action': propAction.value
      }
    })

    useAdmin('d-top', context)

    return {
      top,
      propBar,
      propBarAction,
      propClose,
      propAction,
      classList
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
