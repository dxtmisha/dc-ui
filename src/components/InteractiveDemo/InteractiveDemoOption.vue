<template>
  <div class="interactive-demo__option">
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
          :value="item.default"
          :name="item.value"
          :text="item.text"
          :list="item.list"
          menu-size="compact"
          adaptive="block"
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
import DCheckbox from '@/components/DCheckbox'
import DButtonSelect from '@/components/DButtonSelect'

export default {
  name: 'InteractiveDemoOption',
  components: {
    DButtonSelect,
    DCheckbox
  },
  props: {
    options: Array
  },
  emits: ['on-input'],
  methods: {
    onInput (event) {
      this.$emit('on-input', event)
    }
  }
}
</script>

<style lang="scss"></style>
