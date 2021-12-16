<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-app-bar">
      <teleport to="body">
        <d-app-bar
          v-bind="binds"
          id="id-app-bar"
          :bar-action="barAction"
          :admin="true"
        />
      </teleport>
      <div class="pt-4" v-html="text"/>
    </div>
  </interactive-demo>
</template>

<script>
import DAppBar from '@/components/DAppBar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import action from '@/media/demo/list/action'
import { optionsAppBar } from './options'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoAppBar',
  components: {
    DAppBar,
    InteractiveDemo
  },
  setup () {
    const options = optionsAppBar
    const barAction = action
    const text = alexanderPushkin

    return {
      options,
      barAction,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-app-bar {
  width: 100%;
}
</style>
