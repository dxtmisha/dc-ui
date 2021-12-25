<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-alert
      id="id-alert"
      class="demo-alert"
      v-bind="binds"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DAlert from '@/components/DAlert'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsAlert } from './options'

export default {
  name: 'DemoAlert',
  components: {
    DAlert,
    InteractiveDemo
  },
  setup () {
    const options = optionsAlert
    return { options }
  }
}
</script>

<style lang="scss">
.demo-alert {
  width: 100%;
}
</style>
