<template>
  <select ref="input" @input="onInput">
    <option
      v-for="name in list"
      :key="name"
      :selected="valueTheme === name"
      :value="name"
    >
      {{ name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'InteractiveDemoTheme',
  props: {
    list: {
      type: Array,
      default: () => [
        'm2-baseline',
        'm2-dark'
      ]
    }
  },
  computed: {
    valueTheme () {
      return this.$theme.get()
    }
  },
  methods: {
    onInput () {
      this.$theme.set(this.$refs.input.value)
    }
  }
}
</script>

<style lang="scss">

</style>
