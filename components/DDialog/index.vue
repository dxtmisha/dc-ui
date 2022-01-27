<template>
  <d-window
    ref="window"
    v-bind="bindWindow"
    class="d-dialog"
    @on-open="onOpen"
  >
    <template v-slot:control="binds">
      <slot name="control" v-bind="binds"/>
    </template>

    <template v-slot:window>
      <div v-bind="$attrs" class="d-dialog__body">
        <div v-if="title" class="d-dialog__title">{{ title }}</div>
        <div v-else-if="'head' in $slots" class="d-dialog__head">
          <slot name="head"/>
        </div>

        <div class="d-dialog__main">
          <d-scrollbar class="d-dialog__context" :border="border">
            <div v-if="text" class="d-dialog__text" v-html="text"/>
            <slot v-else/>
          </d-scrollbar>
          <d-actions v-if="bar !== null" v-bind="bindActions" @on-click="onClick"/>
        </div>
      </div>
    </template>
  </d-window>
</template>

<script>
import DActions from '../DActions'
import DScrollbar from '../DScrollbar'
import DWindow from '../DWindow'
import { props } from './props'
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import useAdmin from '../../uses/useAdmin'
import attrActions from '../DActions/attrActions'
import attrWindow from '../DWindow/attrWindow'

export default {
  name: 'DDialog',
  inheritAttrs: false,
  components: {
    DScrollbar,
    DActions,
    DWindow
  },
  props,
  emits: ['on-click', 'on-open'],
  setup (props, context) {
    const { open } = toRefs(props)

    const window = ref(undefined)
    const main = ref(undefined)

    const toggle = () => window.value.toggle(props.open)

    const bindActions = attrActions({ props })
    const bindWindow = attrWindow({
      props,
      attrs: {
        class: computed(() => {
          return {
            'option-image': props.src,
            'option-landscape': props.landscape,
            'option-dense': props.dense
          }
        }),
        style: computed(() => {
          return {
            '--_dl__hd-image': props.src && props.src !== true ? `url(${props.src})` : null,
            '--_dl-width': props.windowWidth
          }
        })
      }
    })

    const onOpen = event => context.emit('on-open', event)
    const onClick = event => context.emit('on-click', event)

    watch(open, toggle)
    onMounted(toggle)

    useAdmin('d-dialog', context)

    return {
      window,
      main,
      bindActions,
      bindWindow,
      onOpen,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-dialog {
  @include dialogInit;
}
</style>
