<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-menu">
      <d-menu ref="menu" v-bind="binds" :list="list">
        <template v-slot:default="{ classList, onClick, progress }">
          <d-button
            :class="classList"
            text="Interactive demo"
            :progress="progress"
            @click="onClick"
          />
        </template>
      </d-menu>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '@/--components/DButton'
import DMenu from '@/--components/DMenu'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsMenu } from '@/views/DemoMenu/options'
import { menu } from '@/media/demo/list'

export default {
  name: 'DemoMenu',
  components: {
    DButton,
    DMenu,
    InteractiveDemo
  },
  setup () {
    const options = optionsMenu
    const list = menu

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss">
.demo-menu {
  display: flex;
  gap: 8px;
}
</style>
