<template>
  <div class="d-alert" :class="classList" role="alert">
    <div class="d-alert__icon">
      <d-icon v-if="icon" v-bind="bindIcon"/>
    </div>
    <div class="d-alert__content">
      <div v-if="text" class="d-alert__text" v-html="text"/>
      <div v-if="description" class="d-alert__description" v-html="description"/>
      <slot name="description"/>
    </div>
    <slot/>
    <d-button v-if="cancel" v-bind="bindButton" @click="onHide"/>
  </div>
</template>

<script>
import DButton from '@/components/DButton'
import DIcon from '@/components/DIcon'
import { props } from './props'
import { computed, toRefs } from 'vue'
import attrButton from '@/components/DButton/attrButton'
import attrIcon from '@/components/DIcon/attrIcon'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DAlert',
  components: {
    DButton,
    DIcon
  },
  props,
  setup (props, context) {
    const {
      hide,
      iconClose
    } = toRefs(props)

    const propHide = useWatch(hide, () => hide.value, ['init'])

    const bindButton = attrButton({
      props,
      attrs: {
        icon: iconClose,
        appearance: 'text',
        size: 'small'
      }
    })
    const bindIcon = attrIcon({ props })

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'status-hide': propHide.value,
        [`appearance-${props.appearance}`]: props.appearance,
        [`shape-${props.shape}`]: props.shape,
        [`border-${props.border}`]: props.border,
        'option-dense': props.dense,
        'option-show': props.animationShow,
        ...palette.value
      }
    })

    const onHide = () => {
      propHide.value = true
    }

    useAdmin('d-alert', context)

    return {
      bindButton,
      bindIcon,
      classList,
      onHide
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-alert {
  @include alertInit;
}
</style>
