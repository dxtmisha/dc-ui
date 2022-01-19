<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-mask
      v-bind="binds"
      id="id-mask"
      class="demo-mask"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DMask from '../../../components/DMask'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsMask } from './options'

export default {
  name: 'DemoMask',
  components: {
    DMask,
    InteractiveDemo
  },
  setup () {
    const options = optionsMask
    return { options }
  }
}
</script>

<style lang="scss">
.demo-mask {
  border-width: var(--basic-border-width);
}
</style>
