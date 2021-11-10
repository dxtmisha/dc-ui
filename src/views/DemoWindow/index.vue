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
      <template v-slot:window>
        <div class="p-4">
          <d-window v-bind="binds" :open="info" @on-open="onInfo">
            <template v-slot:control="{ classList, onClick, onContextmenu }">
              <d-button
                :class="classList"
                text="Information"
                @click="onClick"
                @contextmenu="onContextmenu"
              />
            </template>
            <template v-slot:window>
              <div v-html="text2"/>
            </template>
          </d-window>
        </div>
        <div
          class="p-4"
          :style="{ 'max-width': binds.width }"
          v-html="text1"
        />
      </template>
    </d-window>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DWindow from '@/components/DWindow'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsWindow } from '@/views/DemoWindow/options'
import { leoTolstoy, quote2 } from '@/media/demo/texts'

export default {
  name: 'DemoWindow',
  components: {
    DButton,
    DWindow,
    InteractiveDemo
  },
  setup () {
    const options = optionsWindow
    const text1 = quote2
    const text2 = leoTolstoy
    const info = ref(false)

    return {
      options,
      text1,
      text2,
      info
    }
  },
  methods: {
    onOpen ({
      toOpen,
      type
    }) {
      console.log('type: open', type)
      this.$refs.interactive.setData('open', toOpen)
    },
    onInfo ({
      toOpen,
      type
    }) {
      console.log('type: info', type)
      this.info = toOpen
    }
  }
}
</script>

<style lang="scss"></style>
