<template>
  <div class="d-card-title">
    <d-icon
      v-if="icon"
      v-bind="bindIcon"
      :active="active"
      class="d-card-title__icon"
    />
    <div class="d-card-title__title">
      <a :href="href" class="d-card-title__text a-static" v-html="title"/>
      <div class="d-card-title__description" v-html="description"/>
    </div>
    <d-card-menu v-if="menu" v-bind="bindMenu" @on-click="onClick"/>
    <slot/>
  </div>
</template>

<script>
import DCardMenu from '@/components/DCardMenu'
import DIcon from '@/components/DIcon'
import { props } from './props'
import { computed } from 'vue'
import attrIcon from '@/components/DIcon/attrIcon'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DCardTitle',
  components: {
    DCardMenu,
    DIcon
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const bindIcon = attrIcon({ props })
    const bindMenu = computed(() => Array.isArray(props.menu) ? { list: props.menu } : props.menu)

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-card-title', context)
    return {
      bindIcon,
      bindMenu,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-card-title {
  @include cardTitleInit;
}
</style>
