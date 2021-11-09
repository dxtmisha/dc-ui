<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-window v-bind="binds" @on-open="onOpen">
      <template v-slot:control="{ classList, onClick, onContextmenu }">
        <d-button
          :class="classList"
          text="Interactive demo"
          @click="onClick"
          @contextmenu="onContextmenu"
        />
      </template>
    </d-window>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DWindow from '@/components/DWindow'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsWindow } from '@/views/DemoWindow/options'

export default {
  name: 'DemoWindow',
  components: {
    DButton,
    DWindow,
    InteractiveDemo
  },
  setup () {
    const options = optionsWindow
    return { options }
  },
  methods: {
    onOpen ({ toOpen }) {
      this.$refs.interactive.setData('open', toOpen)
    }
  }
}
</script>

<style lang="scss"></style>
