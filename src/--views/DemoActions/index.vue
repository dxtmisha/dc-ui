<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-actions">
      <div class="pt-4" v-html="text"/>
      <d-actions
        v-bind="binds"
        id="id-actions"
        class="border"
        :bar-management="barManagement"
        :admin="true"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DActions from '@/--components/DActions'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import action from '@/media/--demo/list/action'
import { optionsActions } from './options'
import { leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoActions',
  components: {
    DActions,
    InteractiveDemo
  },
  setup () {
    const options = optionsActions
    const barManagement = action
    const text = leoTolstoy

    return {
      options,
      barManagement,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-actions {
  max-width: 640px;
  width: 100%;
}
</style>
