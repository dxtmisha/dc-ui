<template>
  <d-window
    ref="window"
    v-bind="binds"
    @on-open="onOpen"
  >
    <template v-slot:control="binds">
      <slot name="control" v-bind="binds"/>
    </template>
    <template v-slot:window>
      <div class="d-dialog__body">
        <div v-if="title" class="d-dialog__title">{{ title }}</div>
        <div v-else-if="'head' in $slots" class="d-dialog__head">
          <slot name="head"/>
        </div>
        <div class="d-dialog__main">
          <d-scrollbar
            class="d-dialog__context"
            :border="border"
          >
            <div
              v-if="text"
              class="d-dialog__text"
              v-html="text"
            />
            <slot v-else/>
          </d-scrollbar>
          <d-actions
            v-if="actions !== null"
            v-bind="attrsActions"
            :bar="actions"
            :bar-management="actionsManagement"
            :axis="axis"
            @on-click="onClick"
          />
        </div>
      </div>
    </template>
  </d-window>
</template>

<script>
import DActions from '@/--components/DActions'
import DScrollbar from '@/--components/DScrollbar'
import DWindow from '@/--components/DWindow'
import { props } from './props'
import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DDialog',
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

    const toggle = () => {
      nextTick()
      window.value.toggle(props.open)
    }

    const binds = computed(() => {
      return {
        class: {
          'd-dialog': true,
          'option-image': props.image,
          'option-landscape': props.landscape,
          'option-dense': props.dense
        },
        style: {
          '--_dl__hd-image': props.image && props.image !== true ? `url(${props.image})` : null,
          '--_dl-width': props.width
        },
        disabled: props.disabled,
        width: props.width,
        size: props.size,
        shape: props.shape,
        adaptive: props.adaptive,
        autoClose: props.autoClose,
        persistent: props.persistent,
        ...props.attrsWindow
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
      binds,
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
