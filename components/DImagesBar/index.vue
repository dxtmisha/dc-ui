<template>
  <figcaption :class="classList" class="d-images-bar">
    <div class="d-images-bar__context">
      <div v-if="title" class="d-images-bar__title" v-html="title"/>
      <div v-if="text" class="d-images-bar__text" v-html="text"/>
    </div>
    <d-button
      v-if="icon"
      v-bind="buttonAttrs"
      :item="item"
      :value="value"
      appearance="text"
      size="small"
      :icon="icon"
      @on-click="onClick"
    />
    <slot/>
  </figcaption>
</template>

<script>
import DButton from '../DButton'
import { props } from './props'
import { computed, inject, toRefs } from 'vue'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DImagesBar',
  components: { DButton },
  props,
  emits: ['on-click'],
  setup (props, context) {
    const {
      size,
      display
    } = toRefs(props)

    const barSize = inject('barSize', size)
    const barDisplay = inject('barDisplay', display)

    const classList = computed(() => {
      const size = barSize.value
      const display = barDisplay.value

      return {
        [`size-${size}`]: size,
        [`display-${display}`]: display,
        'status-selected': props.selected
      }
    })

    const onClick = event => context.emit('on-click', event)

    useAdmin('d-images-bar', context)

    return {
      classList,
      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-images-bar {
  @include imagesBarInit;
}
</style>
