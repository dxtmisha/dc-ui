<template>
  <d-motion-transform
    :auto-close="false"
    :bottom="true"
    :class="classTransform"
    :click="false"
    :open="propOpen"
    adaptive="panel"
    @on-open="onOpen"
  >
    <template v-slot:default>
      <div :style="styleList" class="d-banner">
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
import DActions from './../DActions'
import DIcon from './../DIcon'
import DMotionTransform from './../DMotionTransform'
import { props } from './props'
import { computed, toRefs } from 'vue'
import attrActions from './../DActions/attrActions'
import attrIcon from './../DIcon/attrIcon'
import useWatch from './../../uses/useWatch'

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

    const propOpen = useWatch(open, () => open.value, ['init'])

    const toOpen = () => {
      propOpen.value = true
    }

    const bindIcon = attrIcon({ props })
    const bindActions = attrActions({ props })

    const classTransform = computed(() => {
      return { 'd-banner--sticky': props.sticky }
    })
    const styleList = computed(() => {
      return { '--_bn-width': props.width }
    })

    const onOpen = ({ open }) => {
      propOpen.value = open
    }

    return {
      propOpen,
      bindIcon,
      bindActions,
      classTransform,
      styleList,
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
