<template>
  <div v-bind="binds" class="d-images-item a-static">
    <a :style="styleBody" class="d-images-item__body">
      <slot/>
      <d-icon-item
        :icon="src"
        :coordinator="coordinator"
        :zoom="zoom"
        :x="x"
        :y="y"
        @on-load="onLoad"
      />
      <d-icon :icon="iconCheck" class="d-images-item__icon"/>
    </a>
    <d-images-bar
      v-if="text || title"
      :item="item"
      :value="value"
      :title="title"
      :text="text"
      :selected="selected"
    />
  </div>
</template>

<script>
import DIcon from './../DIcon'
import DIconItem from './../DIconItem'
import DImagesBar from './../DImagesBar'
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from './../../uses/useAdmin'

export default {
  name: 'DImagesItem',
  components: {
    DIconItem,
    DIcon,
    DImagesBar
  },
  props,
  setup (props, context) {
    const height = ref(undefined)
    const width = ref(undefined)

    const binds = computed(() => {
      return {
        class: {
          [`emphasize-${props.emphasize}`]: props.emphasize,
          'status-selected': props.selected
        },
        style: {
          '--it-height': height.value,
          '--it-width': width.value
        },
        'data-value': props.value,
        'data-height': height.value,
        'data-width': width.value
      }
    })
    const styleBody = computed(() => {
      return {}
    })

    const onLoad = event => {
      height.value = Math.floor(event.height * 10 / event.width)
      width.value = Math.floor(event.width * 10 / event.height)
    }

    useAdmin('d-images-item', context)

    return {
      binds,
      styleBody,
      onLoad
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-images-item {
  @include imagesItemInit;
}
</style>
