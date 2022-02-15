<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <d-display v-if="binds.type === 'calendar'" v-bind="binds" class="block" code="chinese"/>
      <d-display v-else-if="binds.type === 'currency'" v-bind="binds" class="block" code="USD"/>
      <d-display v-else-if="binds.type === 'region'" v-bind="binds" class="block" code="GB"/>
      <d-display v-else v-bind="binds" class="block" code="en-GB"/>
    </div>
  </interactive-demo>
</template>

<script>
import DDisplay from '../../../components/DDisplay'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDisplay } from './options'

export default {
  name: 'DemoDisplay',
  components: {
    DDisplay,
    InteractiveDemo
  },
  setup () {
    const options = optionsDisplay
    return {
      options
    }
  }
}
</script>

<style lang="scss">
.demo-dialog {
  max-width: 640px;
}
</style>
