<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-icon-item">
      <d-icon-item v-bind="binds"/>
    </div>
  </interactive-demo>
</template>

<script>
import DIconItem from '@/components/DIconItem'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsIconItem } from '@/views/DemoIconItem/options'

export default {
  name: 'DemoIconItem',
  components: {
    DIconItem,
    InteractiveDemo
  },
  setup () {
    const options = optionsIconItem
    return {
      options
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";
@import "../../styles/font";

.demo-icon-item {
  @include font('headline4');
  @include squared(64px);
  border-width: var(--basic-border-width);
  position: relative;
}
</style>
