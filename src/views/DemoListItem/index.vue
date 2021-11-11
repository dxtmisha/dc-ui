<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-list-item">
      <d-list-item v-bind="binds" :text-short="binds.text ? 'Demo' : undefined"/>
      <d-list-item v-bind="binds" :text-short="binds.text ? 'Demo' : undefined"/>
      <d-list-item v-bind="binds" :text-short="binds.text ? 'Demo' : undefined"/>
    </div>
  </interactive-demo>
</template>

<script>
import DListItem from '@/components/DListItem'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsListItem } from '@/views/DemoListItem/options'

export default {
  name: 'DemoListItem',
  components: {
    DListItem,
    InteractiveDemo
  },
  setup () {
    const options = optionsListItem
    return { options }
  }
}
</script>

<style lang="scss">
.demo-list-item {
  max-width: 100%;
  width: 320px;
}
</style>
