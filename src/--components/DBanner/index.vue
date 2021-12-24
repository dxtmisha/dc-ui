<template>
  <d-motion-transform
    :class="classTransform"
    :open="propOpen"
    adaptive="panel"
    :auto-close="false"
    :click="false"
    :bottom="true"
    @on-open="onOpen"
  >
    <template v-slot:default>
      <div v-bind="binds">
        <div class="d-banner__body">
          <div class="d-banner__text">
            <d-icon v-if="icon" v-bind="bindIcon" class="d-banner__icon"/>
            <span v-html="text"/>
            <slot/>
          </div>
          <d-actions v-bind="bindActions" class="d-banner__bar"/>
        </div>
      </div>
    </template>
  </d-motion-transform>
</template>

<script>
import DActions from '@/components/DActions'
import DIcon from '@/components/DIcon'
import DMotionTransform from '@/--components/DMotionTransform'
import { props } from './props'
import { computed, toRefs } from 'vue'
import attrActions from '@/--components/attrActions'
import attrIcon from '@/--components/--DIcon/attrIcon'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DBanner',
  components: {
    DActions,
    DIcon,
    DMotionTransform
  },
  props,
  setup (props) {
    const { open } = toRefs(props)

    const propOpen = useWatch(open, data => {
      data.value = open.value
    })

    const toOpen = () => {
      propOpen.value = true
    }

    const bindIcon = attrIcon(props, {}, {}, ['icon'])
    const bindActions = attrActions(props, {}, {}, ['bar'])
    const binds = computed(() => {
      return {
        class: {
          'd-banner': true,
          [`size-${props.size}`]: props.size,
          'option-sticky': props.sticky
        },
        style: { '--_bn-width': props.width }
      }
    })
    const classTransform = computed(() => {
      return { 'd-banner--sticky': props.sticky }
    })

    const onOpen = ({ open }) => {
      propOpen.value = open
    }

    return {
      propOpen,
      bindIcon,
      bindActions,
      binds,
      classTransform,
      toOpen,
      onOpen
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-banner {
  @include bannerInit
}
</style>
