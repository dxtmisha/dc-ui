<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-calendar-multiple
      v-bind="binds"
      id="id-calendar-multiple"
      class="border"
      :value="binds.value || selected"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DCalendarMultiple from '@/components/DCalendarMultiple'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsCalendarMultiple } from './options'

export default {
  name: 'DemoCalendarMultiple',
  components: {
    DCalendarMultiple,
    InteractiveDemo
  },
  setup () {
    const options = optionsCalendarMultiple
    const selected = ref(undefined)

    return {
      options,
      selected
    }
  },
  methods: {
    on (event) {
      this.selected = event.value
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
