<template>
  <d-window ref="window" v-bind="bindWindow" @on-open="onOpen">
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
import DActions from '@/components/DActions'
import DScrollbar from '@/--components/DScrollbar'
import DWindow from '@/--components/DWindow'
import { props } from './props'
import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import attrActions from '@/--components/attrActions'
import attrWindow from '@/--components/DWindow/attrWindow'
import useAdmin from '@/uses/useAdmin'

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
    const refs = toRefs(props)

    const window = ref(undefined)
    const main = ref(undefined)

    const toggle = () => {
      nextTick()
      window.value.toggle(props.open)
    }

    const bindActions = attrActions(props, {}, {}, ['bar', 'barAction'])
    const bindWindow = attrWindow(props, refs, {
      class: computed(() => {
        return {
          'd-dialog': true,
          'option-image': props.src,
          'option-landscape': props.landscape,
          'option-dense': props.dense
        }
      }),
      style: computed(() => {
        return {
          '--_dl__hd-image': props.src && props.src !== true ? `url(${props.src})` : null,
          '--_dl-width': props.width
        }
      })
    })

    const onOpen = event => context.emit('on-open', event)
    const onClick = event => context.emit('on-click', event)

    watch(refs.open, toggle)
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
