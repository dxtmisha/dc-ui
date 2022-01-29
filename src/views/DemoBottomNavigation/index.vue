<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <teleport to="body">
      <d-bottom-navigation
        v-bind="binds"
        id="id-bottom-navigation"
        :admin="true"
        :list="list"
        selected="music"
        @on-click="on"
      />
    </teleport>
    <div v-html="text"></div>
  </interactive-demo>
</template>

<script>
import DBottomNavigation from '../../../components/DBottomNavigation'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsBottomNavigation } from './options'
import { bottomNavigation } from '@/media/demo/data/list'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoBottomNavigation',
  components: {
    DBottomNavigation,
    InteractiveDemo
  },
  setup () {
    const options = optionsBottomNavigation
    const list = bottomNavigation
    const text = alexanderPushkin

    return {
      options,
      list,
      text
    }
  }
}
</script>

<style lang="scss"></style>
