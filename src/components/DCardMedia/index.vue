<template>
  <a :href="href" :style="styleList" class="d-card-media">
    <d-icon-item
      :icon="thumbnail"
      :coordinator="coordinator"
      :zoom="zoom"
      :x="x"
      :y="y"
      class="d-card-media__thumbnail"
    />
    <d-icon
      :active="active"
      :iconActive="iconCheck"
      class="d-card-media__icon"
      icon=" "
    />
  </a>
</template>

<script>
import DIconItem from './../DIconItem'
import DIcon from './../DIcon'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'

export default {
  name: 'DCardMedia',
  components: {
    DIcon,
    DIconItem
  },
  props,
  setup (props, context) {
    const styleList = computed(() => {
      return { '--cm__ic-aspect': props.aspectRatio || null }
    })

    useAdmin('d-card-media', context)

    return {
      styleList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-card-media {
  @include cardMediaInit;
}
</style>
