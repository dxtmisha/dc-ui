<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-window v-bind="binds">
      <template v-slot:control>
        <d-button text="Interactive demo"/>
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
  }
}
</script>

<style lang="scss"></style>
