<template>
  <d-button-select
    :value="valueTheme"
    name="theme"
    :text="text.Theme"
    :list="list"
    menu-size="compact"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'

export default {
  name: 'InteractiveDemoTheme',
  components: { DButtonSelect },
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          m2: { subtitle: 'Material 2' },
          'm2-baseline': {
            text: 'material 2: baseline',
            icon: 'light_mode'
          },
          'm2-dark': {
            text: 'material 2: dark',
            icon: 'dark_mode'
          },
          'm2-line': { line: true }
        }
      }
    }
  },
  data () {
    return {
      text: {
        Theme: this.$translate.get('Theme')
      }
    }
  },
  computed: {
    valueTheme () {
      return this.$theme.get() || 'm2-baseline'
    }
  },
  methods: {
    onInput (event) {
      this.$theme.set(event.value)
    }
  }
}
</script>

<style lang="scss">

</style>
