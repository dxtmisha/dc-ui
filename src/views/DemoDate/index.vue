<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-date
      v-bind="binds"
      id="id-date"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DDate from '../../../components/DDate'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDate } from './options'

export default {
  name: 'DemoDate',
  components: {
    DDate,
    InteractiveDemo
  },
  setup () {
    const options = optionsDate
    return { options }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
