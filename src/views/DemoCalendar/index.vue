<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-calendar
      v-bind="binds"
      id="id-calendar"
      :selected="selected"
      :admin="true"
      @on-selected="on"
    />
  </interactive-demo>
</template>

<script>
import DCalendar from '@/components/DCalendar'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsCalendar } from './options'

export default {
  name: 'DemoCalendar',
  components: {
    DCalendar,
    InteractiveDemo
  },
  setup () {
    const options = optionsCalendar
    const selected = ref(undefined)

    return {
      options,
      selected
    }
  },
  methods: {
    on (event) {
      this.selected = event.selected
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
