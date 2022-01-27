<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <div v-for="value in list" :key="value">
        {{ value }}
        <span class="opacity:surface-medium">=&gt; </span>
        <d-number
          id="id-number"
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
import DNumber from '../../../components/DNumber'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsNumber } from './options'

export default {
  name: 'DemoNumber',
  components: {
    DNumber,
    InteractiveDemo
  },
  setup () {
    const options = optionsNumber
    const list = [
      100,
      1000,
      1000.50,
      '1000.50',
      '1000,50',
      '1 000,50',
      1000000,
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
