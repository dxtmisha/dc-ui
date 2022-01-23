<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-dialog
      v-bind="binds"
      id="id-dialog"
      :admin="true"
      @on-click="on"
    >
      <template v-slot:control="{ classList, onClick, onContextmenu }">
        <d-button
          :class="classList"
          text="Interactive demo"
          @click="onClick"
          @contextmenu="onContextmenu"
        />
      </template>
      <template v-slot:head>Interactive demo</template>
      <div class="demo-dialog" v-html="text"/>
    </d-dialog>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DDialog from '../../../components/DDialog'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDialog } from './options'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoDialog',
  components: {
    DButton,
    DDialog,
    InteractiveDemo
  },
  setup () {
    const options = optionsDialog
    const text = alexanderPushkin

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-dialog {
  max-width: 640px;
}
</style>
