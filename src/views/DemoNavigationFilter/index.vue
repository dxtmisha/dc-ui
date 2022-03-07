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
        save="navigation-filter"
        v-bind="binds"
        @on-input="on"
      />
    </teleport>
    <div>
      <d-select-value :value="valuesByItem" class="pb-4" multiple/>
      <d-button text="Interactive demo" @click="onClick"/>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DNavigationFilter from '../../../components/DNavigationFilter'
import DSelectValue from '../../../components/DSelectValue'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { computed, ref } from 'vue'
import { optionsNavigationFilter } from './options'
import { filter } from '@/media/demo/data/filter'

export default {
  name: 'DemoNavigationFilter',
  components: {
    DButton,
    DNavigationFilter,
    DSelectValue,
    InteractiveDemo
  },
  setup () {
    const navigation = ref(undefined)
    const options = optionsNavigationFilter
    const fields = filter
    const valuesByItem = computed(() => navigation.value?.valuesByItem)

    return {
      navigation,
      options,
      fields,
      valuesByItem
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
