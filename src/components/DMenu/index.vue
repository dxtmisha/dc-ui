<template>
  <d-window>
    <template v-slot:control="binds">{{ binds }}</template>
  </d-window>
</template>

<script>
import { props } from '@/components/DMenu/props'
import DWindow from '@/components/DWindow'

export default {
  name: 'DMenu',
  components: { DWindow },
  props,
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss"></style>
