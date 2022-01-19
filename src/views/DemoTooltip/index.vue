<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-tooltip
      v-bind="binds"
      id="id-tooltip"
      :admin="true"
    >
      <template v-slot:control="{ classList, onClick, onMouseover, onMouseout }">
        <d-button
          :class="classList"
          text="Interactive demo"
          @click="onClick"
          @mouseover="onMouseover"
          @mouseout="onMouseout"
        />
      </template>
    </d-tooltip>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DTooltip from '../../../components/DTooltip'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTooltip } from './options'

export default {
  name: 'DemoTooltip',
  components: {
    DButton,
    DTooltip,
    InteractiveDemo
  },
  setup () {
    const options = optionsTooltip
    return { options }
  }
}
</script>

<style lang="scss"></style>
