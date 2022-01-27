<template>
  <div class="interactive-demo__option">
    <div class="basis-full">
      <d-clipboard :value="clipboard" class="interactive-demo__clipboard"/>
    </div>
    <div
      v-for="item in options"
      :key="item.value"
      class="interactive-demo__option__item"
      :class="{ 'id-checkbox': !item?.list }"
    >
      <template v-if="item?.subtitle">
        <div class="interactive-demo__option__subtitle">{{ item.subtitle }}</div>
      </template>
      <div
        v-else-if="item?.list"
        class="interactive-demo__option__item"
      >
        <d-button-select
          :item="item"
          :list="item.list"
          :name="item.value"
          :text="item.text"
          :value="item.default"
          adaptive="block"
          shape="basic"
          menu-size="compact"
          menu-width="248px"
          @on-input="onInput"
        />
      </div>
      <d-checkbox
        v-else
        :item="item"
        :value="item.default"
        :name="item.value"
        :text="item.text"
        @on-input="onInput"
      />
    </div>
  </div>
</template>

<script>
import DCheckbox from '../../../components/DCheckbox'
import DClipboard from '../../../components/DClipboard'
import DButtonSelect from '../../../components/DButtonSelect'

export default {
  name: 'InteractiveDemoOption',
  components: {
    DCheckbox,
    DClipboard,
    DButtonSelect
  },
  props: {
    options: Array
  },
  emits: ['on-input'],
  computed: {
    clipboard () {
      const name = this.$route.name.replace(/^([a-z])|(-)([a-z])/ig, (all, s1, s2, s3) => (s3 || s1).toString().toUpperCase())
      return `import ${name} from 'dcode/components/${name}'`
    }
  },
  methods: {
    onInput (event) {
      this.$emit('on-input', event)
    }
  }
}
</script>

<style lang="scss"></style>
