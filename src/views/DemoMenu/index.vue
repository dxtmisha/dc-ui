<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-menu">
      <d-menu v-bind="binds" :list="list"/>
    </div>
  </interactive-demo>
</template>

<script>
import DMenu from '@/components/DMenu'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsMenu } from '@/views/DemoMenu/options'
import { menu } from '@/media/demo/list'

export default {
  name: 'DemoMenu',
  components: {
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

<style lang="scss"></style>
