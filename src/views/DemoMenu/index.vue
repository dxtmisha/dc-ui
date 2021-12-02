<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-menu">
      <d-button
        icon="chevron_left"
        appearance="text-color"
        @click="$refs.menu.previous()"
      />
      <d-menu
        ref="menu"
        v-bind="binds"
        id="id-menu"
        :list="list"
        :admin="true"
      >
        <template v-slot:default="{ classList, onClick, names, progress }">
          <d-button
            :class="classList"
            :text="names ? names?.join(', ') : 'Interactive demo'"
            :progress="progress"
            @click="onClick"
          />
        </template>
      </d-menu>
      <d-button
        icon="chevron_right"
        appearance="text-color"
        @click="$refs.menu.next()"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DMenu from '@/components/DMenu'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsMenu } from './options'
import menu from '@/media/demo/list/menu'

export default {
  name: 'DemoMenu',
  components: {
    DButton,
    DMenu,
    InteractiveDemo
  },
  setup () {
    const options = optionsMenu
    const list = menu

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss">
.demo-menu {
  display: flex;
  gap: 8px;
  max-width: 400px;
}
</style>
