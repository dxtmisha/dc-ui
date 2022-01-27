<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <div v-for="value in list" :key="value">
        {{ value }}
        <span class="opacity:surface-medium">=&gt; </span>
        <d-currency
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
import DCurrency from '../../../components/DCurrency'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCurrency } from './options'

export default {
  name: 'DemoCurrency',
  components: {
    DCurrency,
    InteractiveDemo
  },
  setup () {
    const options = optionsCurrency
    const list = [
      100,
      1000,
      1000.50,
      '1000.50',
      '1000,50',
      '1 000,50',
      1000000,
      '1200.50 EUR',
      '1200.50 RUB',
      '1200.50 USD',
      '1200.50 VND',
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
