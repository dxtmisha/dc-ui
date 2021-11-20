<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-window v-bind="binds">
      <template v-slot:control="{ classList, onClick, onContextmenu }">
        <d-button
          :class="classList"
          text="Interactive demo"
          @click="onClick"
          @contextmenu="onContextmenu"
        />
      </template>
      <template v-slot:window>
        <div class="demo-window p-4" v-html="text"/>
      </template>
    </d-window>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DWindow from '@/components/DWindow'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsWindow } from '@/views/DemoWindow/options'
import { leoTolstoy } from '@/media/demo/texts'

export default {
  name: 'DemoWindow',
  components: {
    DButton,
    DWindow,
    InteractiveDemo
  },
  setup () {
    const options = optionsWindow
    const text = leoTolstoy

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-window {
  max-width: 640px;
}
</style>
