<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <div v-for="value in list" :key="value">
        {{ value }}
        <span class="opacity:surface-medium">=&gt; </span>
        <d-unit
          :admin="true"
          :value="value"
          class="font-medium"
          v-bind="binds"
        />
      </div>
    </div>
  </interactive-demo>
</template>

<script>
import DUnit from '../../../components/DUnit'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsUnit } from './options'

export default {
  name: 'DemoUnit',
  components: {
    DUnit,
    InteractiveDemo
  },
  setup () {
    const options = optionsUnit
    const list = [
      100,
      1000,
      1000.50,
      '1000.50',
      '1000,50',
      '1 000,50',
      1000000,
      '1200.50 kilometer-per-hour',
      '1200.50 meter-per-second',
      '1200.50 mile-per-hour',
      '1200.50 day',
      '1200.50 none',
      'Interactive demo'
    ]

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss">
.demo-actions {
  max-width: 640px;
  width: 100%;
}
</style>
