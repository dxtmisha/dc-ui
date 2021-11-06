<template>
  <div class="interactive-demo__option">
    <div
      v-for="item in options"
      :key="item.value"
      class="interactive-demo__option__item"
    >
      <template v-if="item?.subtitle">
        <div class="font:subtitle2">{{ item.subtitle }}</div>
      </template>
      <template v-else-if="item?.list">
        <select
          @input="onInput($event, item)"
        >
          <option
            v-for="value in item.list"
            :key="value.value"
            :value="value.value"
            :selected="value.value === item?.default"
            v-text="value.text"
          />
        </select>
      </template>
      <template v-else>
        <label>
          <input
            type="checkbox"
            :value="item.value"
            :checked="item.default"
            @input="onInput($event, item)"
          />
          {{ item.text }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InteractiveDemoOption',
  props: {
    options: Array
  },
  emits: ['on-input'],
  methods: {
    onInput ({ target }, item) {
      this.$emit('on-input', {
        item,
        value: target.localName === 'select' ? target.value : target.checked
      })
    }
  }
}
</script>

<style lang="scss">

</style>
