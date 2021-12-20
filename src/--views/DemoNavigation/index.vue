<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <teleport to="nav">
      <d-navigation
        ref="navigation"
        v-bind="binds"
        id="id-navigation"
        :list="list"
        :open="true"
        :admin="true"
        @on-close="onClose"
      >
        <template v-slot:find_friends>
          <div class="p-4" v-html="text[0]"/>
        </template>
        <template v-slot:profile="{ set }">
          <div class="p-4" v-html="text[1]"/>
          <div class="text-center"><a @click="set({ value: 'find_friends' })">Friends</a></div>
        </template>
      </d-navigation>
    </teleport>
    <d-button text="Interactive demo" @click="on"/>
  </interactive-demo>
</template>

<script>
import DButton from '@/--components/DButton'
import DNavigation from '@/--components/DNavigation'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsNavigation } from './options'
import { leoTolstoy, textarea } from '@/media/demo/data/text'
import menu from '@/media/--demo/list/menu'

export default {
  name: 'DemoNavigation',
  components: {
    DButton,
    DNavigation,
    InteractiveDemo
  },
  setup () {
    const options = optionsNavigation
    const open = ref(false)
    const list = menu
    const text = [textarea, leoTolstoy]

    return {
      options,
      open,
      list,
      text
    }
  },
  methods: {
    on () {
      this.open = !this.open
      this.$refs.navigation.show(this.open)
    },
    onClose () {
      this.open = false
    }
  }
}
</script>

<style lang="scss"></style>
