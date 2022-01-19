<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-card-text
      v-bind="binds"
      id="id-card-text"
      :admin="true"
      class="border"
    />
  </interactive-demo>
</template>

<script>
import DCardText from '../../../components/DCardText'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCardText } from './options'

export default {
  name: 'DemoCardText',
  components: {
    DCardText,
    InteractiveDemo
  },
  setup () {
    const options = optionsCardText
    return { options }
  }
}
</script>

<style lang="scss"></style>
