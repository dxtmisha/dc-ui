<template>
  <d-button-select
    :value="valueTheme"
    name="theme"
    :title="text.Theme"
    :list="list"
    appearance="text"
    size="small"
    adaptive="auto"
    :lowercase="true"
    :icon="icon"
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
            text: 'Material 2: baseline',
            icon: 'light_mode'
          },
          'm2-dark': {
            text: 'Material 2: dark',
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
      return this.$theme.value.value || 'm2-baseline'
    },
    icon () {
      return this.list[this.valueTheme]?.icon || 'style'
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
