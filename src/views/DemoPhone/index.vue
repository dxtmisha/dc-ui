<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <form>
      <input type="hidden" name="input-match" value="demo">
      <d-phone
        v-bind="binds"
        id="id-input"
        name="interactive-demo"
        :admin="true"
        @on-input="on"
        @on-change="on"
      />
    </form>
  </interactive-demo>
</template>

<script>
import DPhone from '../../../components/DPhone'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsInput } from './options'

export default {
  name: 'DemoInput',
  components: {
    DPhone,
    InteractiveDemo
  },
  setup () {
    const options = optionsInput
    return { options }
  }
}
</script>

<style lang="scss"></style>
