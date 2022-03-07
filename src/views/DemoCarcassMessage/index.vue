<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-carcass-message
      v-bind="binds"
      id="id-carcass-message"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DCarcassMessage from '../../../components/DCarcassMessage'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCarcassMessage } from './options'

export default {
  name: 'DemoCarcassMessage',
  components: {
    DCarcassMessage,
    InteractiveDemo
  },
  setup () {
    const options = optionsCarcassMessage
    return { options }
  }
}
</script>

<style lang="scss"/>
