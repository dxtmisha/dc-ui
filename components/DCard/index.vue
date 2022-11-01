<template>
  <div v-bind="binds" class="d-card">
    <div class="d-card__body">
      <d-card-media
        v-if="thumbnail"
        v-bind="bindMedia"/>
      <d-card-title v-if="title" v-bind="bindTitle"/>
      <d-card-text v-if="text" :text="text" :title="textTitle"/>
    </div>
    <d-actions
      v-if="bar || barAction"
      v-bind="bindActions"
      @on-click="onClick"
    />
  </div>
</template>

<script>
import DActions from '../DActions'
import DCardMedia from '../DCardMedia'
import DCardText from '../DCardText'
import DCardTitle from '../DCardTitle'
import { props } from './props'
import { computed } from 'vue'
import attrActions from '../DActions/attrActions'
import attrMedia from '../DCardMedia/attrMedia'
import attrTitle from '../DCardTitle/attrTitle'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DCard',
  components: {
    DActions,
    DCardMedia,
    DCardText,
    DCardTitle
  },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const bindTitle = attrTitle({ props })
    const bindMedia = attrMedia({ props })
    const bindActions = attrActions({ props })

    const binds = computed(() => {
      return {
        class: {
          'status-active': props.active,
          'status-dragged': props.dragged,
          'status-hide': props.hide,
          [`appearance-${props.appearance}`]: props.appearance,
          [`shape-${props.shape}`]: props.shape,
          'option-landscape': props.landscape,
          'option-right': props.right,
          'option-background': props.backgroundColor
        },
        style: { '--cr-background': props.backgroundColor }
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-card', context)

    return {
      bindTitle,
      bindMedia,
      bindActions,
      binds,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-card {
  @include cardInit;
}
</style>
