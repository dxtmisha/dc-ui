<template>
  <interactive-demo v-slot:default="{ binds }">
    <d-ripple
      v-bind="binds"
      id="id-ripple"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DRipple from '@/--components/DRipple'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'

export default {
  name: 'DemoRipple',
  components: {
    DRipple,
    InteractiveDemo
  }
}
</script>

<style lang="scss"></style>
