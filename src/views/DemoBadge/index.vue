<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-badge">
      Interactive demo
      <d-badge
        id="id-badge"
        v-bind="binds"
        :admin="true"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DBadge from '@/components/DBadge'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsBadge } from './options'

export default {
  name: 'DemoBadge',
  components: {
    DBadge,
    InteractiveDemo
  },
  setup () {
    const options = optionsBadge
    return { options }
  }
}
</script>

<style lang="scss">
.demo-badge {
  border-width: var(--basic-border-width);
  position: relative;
}
</style>
