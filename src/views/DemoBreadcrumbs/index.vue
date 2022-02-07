<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-breadcrumbs
      id="id-breadcrumbs"
      v-bind="binds"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DBreadcrumbs from '../../../components/DBreadcrumbs'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsBreadcrumbs } from './options'

export default {
  name: 'DemoBreadcrumbs',
  components: {
    DBreadcrumbs,
    InteractiveDemo
  },
  setup () {
    const options = optionsBreadcrumbs
    return { options }
  }
}
</script>

<style lang="scss"/>
