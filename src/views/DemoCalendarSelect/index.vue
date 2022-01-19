<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-calendar-select
      v-bind="binds"
      id="id-calendar-select"
      class="border"
      :value="binds.value || selected"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DCalendarSelect from '../../../components/DCalendarSelect'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsCalendarSelect } from './options'

export default {
  name: 'DemoCalendarSelect',
  components: {
    DCalendarSelect,
    InteractiveDemo
  },
  setup () {
    const options = optionsCalendarSelect
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
