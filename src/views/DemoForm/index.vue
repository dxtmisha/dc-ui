<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-form
      v-bind="binds"
      id="id-file"
      name="interactive-demo"
      :admin="true"
      @on-submit="on"
    />
  </interactive-demo>
</template>

<script>
import DForm from '@/components/DForm'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsForm } from './options'

export default {
  name: 'DemoForm',
  components: {
    DForm,
    InteractiveDemo
  },
  setup () {
    const options = optionsForm
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
