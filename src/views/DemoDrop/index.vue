<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-drop">
      <d-drop
        v-bind="binds"
        id="id-drop"
        :admin="true"
        @on-drop="on"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DDrop from '@/--components/DDrop'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDrop } from './options'

export default {
  name: 'DemoDrop',
  components: {
    DDrop,
    InteractiveDemo
  },
  setup () {
    const options = optionsDrop
    return { options }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";

.demo-drop {
  @include squared(100%);
  max-width: 400px;
  position: relative;
}
</style>
