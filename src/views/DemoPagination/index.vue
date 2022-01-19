<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-pagination
      v-bind="binds"
      class="demo-pagination border"
      id="id-pagination"
      :value="value"
      :admin="true"
      @on-click="on"
    />
  </interactive-demo>
</template>

<script>
import DPagination from '../../../components/DPagination'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsPagination } from './options'
import { ref } from 'vue'

export default {
  name: 'DemoPagination',
  components: {
    DPagination,
    InteractiveDemo
  },
  setup () {
    const options = optionsPagination
    const value = ref(undefined)

    return {
      options,
      value
    }
  },
  methods: {
    on (event) {
      this.value = event.value
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss">
.demo-pagination {
  width: 100%;
}
</style>
