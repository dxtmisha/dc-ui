<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-avatar">
      <div class="text-center pb-4">Interactive demo</div>
      <d-avatar
        id="id-avatar"
        v-bind="binds"
        :admin="true"
        @on-input="on"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DAvatar from '../../../components/DAvatar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsAvatar } from './options'

export default {
  name: 'DemoAvatar',
  components: {
    DAvatar,
    InteractiveDemo
  },
  setup () {
    const options = optionsAvatar
    return { options }
  }
}
</script>

<style lang="scss">
@import "../../styles/flex";

.demo-badge {
  @include flexY;
  border-width: var(--basic-border-width);
}
</style>
