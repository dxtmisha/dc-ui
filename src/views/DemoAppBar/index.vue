<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div class="demo-app-bar">
      <teleport to="body">
        <d-app-bar
          v-bind="binds"
          id="id-app-bar"
          :admin="true"
          @on-click="on"
          @on-action="on"
        >
          <template v-slot:find_friends>
            <div class="p-2 border text-center panel-close cursor-default">Close</div>
            <div class="p-4" v-html="text[1]"/>
          </template>
          <template v-slot:profile>
            <div class="p-2 border text-center panel-close cursor-default">Close</div>
            <div class="p-4" v-html="text[2]"/>
          </template>
        </d-app-bar>
      </teleport>
      <div class="pt-4" v-html="text[0]"/>
    </div>
  </interactive-demo>
</template>

<script>
import DAppBar from '../../../components/DAppBar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { onBeforeMount, onUnmounted } from 'vue'
import { optionsAppBar } from './options'
import { alexanderPushkin, leoTolstoy, textarea } from '@/media/demo/data/text'

export default {
  name: 'DemoAppBar',
  components: {
    DAppBar,
    InteractiveDemo
  },
  setup () {
    const options = optionsAppBar
    const text = [alexanderPushkin, textarea, leoTolstoy]

    onBeforeMount(() => document.body.classList.add('demo-app-bar__body'))
    onUnmounted(() => document.body.classList.remove('demo-app-bar__body'))

    return {
      options,
      text
    }
  },
  methods: {
    on () {
      this.$refs.interactive.setData('action', false)
    }
  }
}
</script>

<style lang="scss">
.demo-app-bar {
  width: 100%;

  &__body header {
    top: 4px;
  }
}
</style>
