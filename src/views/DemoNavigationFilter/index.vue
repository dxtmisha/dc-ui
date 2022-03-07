<template>
  <interactive-demo
    ref="interactive"
    v-slot:default="{ binds, on }"
    :options="options"
  >
    <teleport :to="binds.right ? '.ui-filter' : 'nav'">
      <d-navigation-filter
        id="id-navigation-filter"
        ref="navigation"
        :admin="true"
        :fields="fields"
        :open="true"
        v-bind="binds"
        @on-input="on"
      />
    </teleport>
    <d-button text="Interactive demo" @click="onClick"/>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DNavigationFilter from '../../../components/DNavigationFilter'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsNavigationFilter } from './options'
import { filter } from '@/media/demo/data/filter'

export default {
  name: 'DemoNavigationFilter',
  components: {
    DButton,
    DNavigationFilter,
    InteractiveDemo
  },
  setup () {
    const options = optionsNavigationFilter
    const fields = filter

    return {
      options,
      fields
    }
  },
  methods: {
    onClick () {
      this.$refs.navigation.show(true)
    }
  }
}
</script>

<style lang="scss"></style>
