<template>
  <a :href="href" class="d-card-media">
    <d-icon-item :icon="thumbnail" class="d-card-media__thumbnail"/>
    <d-icon
      :active="active"
      :iconActive="iconCheck"
      class="d-card-media__icon"
      icon=" "
    />
  </a>
</template>

<script>
import { props } from '@/components/DCardMedia/props'
import DIconItem from '@/components/DIconItem'
import DIcon from '@/components/DIcon'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DCardMedia',
  components: {
    DIcon,
    DIconItem
  },
  props,
  setup (props, context) {
    useAdmin('d-card-media', context)
  }
}
</script>

<style lang="scss">
@import "style";

.d-card-media {
  @include cardMediaInit;
}
</style>
