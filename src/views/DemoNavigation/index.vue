<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <teleport to="nav">
      <d-navigation
        v-bind="binds"
        id="id-navigation"
        :list="list"
        :admin="true"
      >
        <template v-slot:find_friends>
          <div class="p-2 border text-center panel-close cursor-default">Close</div>
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
import DButton from '@/components/DButton'
import DNavigation from '@/components/DNavigation'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsNavigation } from './options'
import { leoTolstoy, textarea } from '@/media/demo/data/text'
import menu from '@/media/demo/list/menu'

export default {
  name: 'DemoNavigation',
  components: {
    DButton,
    DNavigation,
    InteractiveDemo
  },
  setup () {
    const options = optionsNavigation
    const list = menu
    const text = [textarea, leoTolstoy]

    return {
      options,
      list,
      text
    }
  },
  methods: {
    on ({ open }) {
      this.$refs.interactive.setData('open', open)
    }
  }
}
</script>

<style lang="scss"></style>
