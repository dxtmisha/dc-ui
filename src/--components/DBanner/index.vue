<template>
  <d-motion-transform
    :class="classTransform"
    :open="propOpen"
    :click="false"
    adaptive="panel"
    :auto-close="false"
    :bottom="true"
    @on-open="onOpen"
  >
    <template v-slot:default>
      <div v-bind="binds">
        <div class="d-banner__body">
          <div class="d-banner__text">
            <d-icon
              v-if="icon"
              class="d-banner__icon"
              :icon="icon"
              :size="size"
              :background="iconBackground"
            />
            <span v-html="text"/>
            <slot/>
          </div>
          <d-actions
            class="d-banner__bar"
            :bar="bar"
            :size="size"
            :axis="axis"
          />
        </div>
      </div>
    </template>
  </d-motion-transform>
</template>

<script>
import DActions from '@/components/DActions'
import DIcon from '@/components/DIcon'
import DMotionTransform from '@/components/DMotionTransform'
import { props } from './props'
import { computed, toRefs } from 'vue'
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
