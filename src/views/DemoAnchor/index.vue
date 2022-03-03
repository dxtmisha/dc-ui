<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div class="lg:flex items-start">
      <div class="demo-anchor__items lg:sticky basis-32">
        <d-anchor :admin="true" id="id-anchor-1" name="anchor1" text="anchor #1" v-bind="binds"/>
        <div/>
        <d-anchor :admin="true" id="id-anchor-2" name="anchor2" text="anchor #2" v-bind="binds"/>
        <div/>
        <d-anchor :admin="true" id="id-anchor-3" name="anchor3" text="anchor #3" v-bind="binds"/>
      </div>
      <div class="basis-32 grow shrink">
        <a id="anchor1"/>
        <div class="font:headline4">Anchor #1</div>
        <div v-html="text[0]"/>
        <a id="anchor2"/>
        <div class="font:headline4">Anchor #2</div>
        <div v-html="text[1]"/>
        <a id="anchor3"/>
        <div class="font:headline4">Anchor #3</div>
        <div v-html="text[2]"/>
      </div>
    </div>
  </interactive-demo>
</template>

<script>
import DAnchor from '../../../components/DAnchor'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsAnchor } from './options'
import { alexanderPushkin, denisDavydov, leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoAnchor',
  components: {
    DAnchor,
    InteractiveDemo
  },
  setup () {
    const options = optionsAnchor
    const text = [alexanderPushkin, leoTolstoy, denisDavydov]

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-anchor {
  &__items {
    top: var(--basic-top);
  }
}
</style>
