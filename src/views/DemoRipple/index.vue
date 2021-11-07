<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-ripple v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DRipple from '@/components/DRipple'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'

export default {
  name: 'DemoRipple',
  components: {
    DRipple,
    InteractiveDemo
  },
  setup () {
    const options = [
      'status',
      'disabled'
    ]

    return { options }
  }
}
</script>

<style lang="scss"></style>
