<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <d-anchor-to :admin="true" id="id-anchor-1" name="anchor1" text="anchor #1" v-bind="binds"/>
      <div/>
      <d-anchor-to :admin="true" id="id-anchor-2" name="anchor2" text="anchor #2" v-bind="binds"/>
      <div/>
      <d-anchor-to :admin="true" id="id-anchor-3" name="anchor3" text="anchor #3" v-bind="binds"/>
    </div>
  </interactive-demo>
</template>

<script>
import DAnchorTo from '../../../components/DAnchorTo'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsAnchorTo } from './options'

export default {
  name: 'DemoAnchorTo',
  components: {
    DAnchorTo,
    InteractiveDemo
  },
  setup () {
    const options = optionsAnchorTo
    return { options }
  }
}
</script>

<style lang="scss">
.demo-anchor {
  &__items {
    top: var(--basic-top);
  }
}
</style>
