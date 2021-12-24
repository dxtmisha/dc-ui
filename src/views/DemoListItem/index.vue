<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-list-item">
      <d-list-item
        v-bind="binds"
        id="id-list-item"
        :admin="true"
      />
      <d-list-item v-bind="binds"/>
      <d-list-item v-bind="binds"/>
    </div>
  </interactive-demo>
</template>

<script>
import DListItem from '@/--components/DListItem'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsListItem } from './options'

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
  border-width: var(--basic-border-width);
  max-width: 100%;
}
</style>
