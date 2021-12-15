<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-snackbar">
      <d-button text="Interactive demo" @click="on"/>
      <teleport to="body">
        <d-snackbar
          ref="snackbar"
          v-bind="binds"
          id="id-snackbar"
          :items="items"
          :admin="true"
        />
      </teleport>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DSnackbar from '@/components/DSnackbar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSnackbar } from './options'
import { helper1, quote1, quote2 } from '@/media/demo/data/text'

export default {
  name: 'DemoSnackbar',
  components: {
    DButton,
    DSnackbar,
    InteractiveDemo
  },
  setup () {
    const options = optionsSnackbar
    const number = 1
    const items = [
      {
        icon: 'help',
        text: helper1
      },
      { text: quote1 },
      { text: quote2 }
    ]

    return {
      options,
      number,
      items
    }
  },
  methods: {
    on () {
      this.$refs.snackbar.show({ text: `${helper1} (${this.number++})` })
    }
  }
}
</script>

<style lang="scss"></style>
