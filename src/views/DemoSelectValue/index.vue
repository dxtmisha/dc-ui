<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-select-value
      v-bind="binds"
      id="id-select-value"
      :value="value"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DSelectValue from '@/components/DSelectValue'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSelectValue } from './options'

export default {
  name: 'DemoSelectValue',
  components: {
    DSelectValue,
    InteractiveDemo
  },
  setup () {
    const options = optionsSelectValue
    const value = [
      {
        text: 'Kelly Klein',
        value: 'kelly_klein'
      },
      {
        text: 'Joseph Martin',
        value: 'joseph_martin'
      },
      {
        text: 'Richard Sullivan',
        value: 'richard_sullivan'
      },
      {
        text: 'James Morris',
        value: 'james_morris'
      },
      {
        text: 'Jimmy Davis',
        value: 'jimmy_davis'
      },
      {
        text: 'Paula Ortiz',
        value: 'paula_ortiz'
      }
    ]

    return {
      options,
      value
    }
  }
}
</script>

<style lang="scss"></style>
