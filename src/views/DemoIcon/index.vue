<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-icon
      id="id-icon"
      v-bind="binds"
      class="demo-icon"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DIcon from '../../../components/DIcon'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsIcon } from './options'

export default {
  name: 'DemoIcon',
  components: {
    DIcon,
    InteractiveDemo
  },
  setup () {
    const options = optionsIcon
    return { options }
  }
}
</script>

<style lang="scss">
.demo-icon {
  border-width: var(--basic-border-width);
}
</style>
